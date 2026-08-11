/**
 * Scrapes all solutions by votrubac from LeetCode's public GraphQL API.
 * Outputs a JSON file mapping problem slugs to solution URLs.
 *
 * Usage: node scrape.js
 */

const LEETCODE_GRAPHQL = "https://leetcode.com/graphql";
const USERNAME = "votrubac";
const PAGE_SIZE = 50;
const OUTPUT_FILE = "../extension/solutions.json";

const QUERY = `
query userSolutionTopics($username: String!, $orderBy: TopicSortingOption, $skip: Int, $first: Int) {
  userSolutionTopics(username: $username, orderBy: $orderBy, skip: $skip, first: $first) {
    pageInfo {
      hasNextPage
    }
    edges {
      node {
        id
        title
        url
        post {
          creationDate
        }
        questionTitle
        solutionTags {
          name
          slug
        }
      }
    }
  }
}
`;

async function fetchPage(skip) {
  const resp = await fetch(LEETCODE_GRAPHQL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
      Referer: "https://leetcode.com",
    },
    body: JSON.stringify({
      query: QUERY,
      variables: {
        username: USERNAME,
        orderBy: "most_votes",
        skip: skip,
        first: PAGE_SIZE,
      },
    }),
  });

  if (!resp.ok) {
    throw new Error(`HTTP ${resp.status}: ${resp.statusText}`);
  }

  return resp.json();
}

function extractSlugFromUrl(url) {
  // url looks like: /problems/minimum-cost-for-tickets/solutions/226659/two-dp-solutions-with-pictures/
  const match = url.match(/\/problems\/([^/]+)\//);
  return match ? match[1] : null;
}

async function main() {
  const fs = await import("fs");
  const path = await import("path");

  const solutions = {}; // { problemSlug: { title, url, solutionTitle } }
  let skip = 0;
  let totalFetched = 0;
  let hasMore = true;

  console.log(`Fetching solutions for user: ${USERNAME}`);

  while (hasMore) {
    console.log(`  Fetching skip=${skip}...`);

    try {
      const data = await fetchPage(skip);

      if (data.errors) {
        console.error("GraphQL errors:", JSON.stringify(data.errors));
        break;
      }

      const topics = data.data?.userSolutionTopics;
      if (!topics || !topics.edges || topics.edges.length === 0) {
        console.log("  No more results.");
        break;
      }

      for (const edge of topics.edges) {
        const node = edge.node;
        const slug = extractSlugFromUrl(node.url);
        if (slug) {
          // If multiple solutions for the same problem, keep the one with most votes (first, since sorted by most_votes)
          if (!solutions[slug]) {
            solutions[slug] = {
              title: node.questionTitle || node.title,
              solutionTitle: node.title,
              url: `https://leetcode.com${node.url}`,
            };
          }
        }
      }

      totalFetched += topics.edges.length;
      hasMore = topics.pageInfo.hasNextPage;
      skip += PAGE_SIZE;

      // Be nice to the API
      await new Promise((r) => setTimeout(r, 300));
    } catch (err) {
      console.error(`  Error at skip=${skip}:`, err.message);
      // Retry once after a longer delay
      console.log("  Retrying in 2s...");
      await new Promise((r) => setTimeout(r, 2000));
      try {
        const data = await fetchPage(skip);
        const topics = data.data?.userSolutionTopics;
        if (topics?.edges) {
          for (const edge of topics.edges) {
            const node = edge.node;
            const slug = extractSlugFromUrl(node.url);
            if (slug && !solutions[slug]) {
              solutions[slug] = {
                title: node.questionTitle || node.title,
                solutionTitle: node.title,
                url: `https://leetcode.com${node.url}`,
              };
            }
          }
          totalFetched += topics.edges.length;
          hasMore = topics.pageInfo.hasNextPage;
          skip += PAGE_SIZE;
        } else {
          break;
        }
      } catch (retryErr) {
        console.error("  Retry failed:", retryErr.message);
        break;
      }
    }
  }

  const outputPath = path.default.resolve(
    path.default.dirname(new URL(import.meta.url).pathname),
    OUTPUT_FILE
  );

  fs.default.mkdirSync(path.default.dirname(outputPath), { recursive: true });
  fs.default.writeFileSync(outputPath, JSON.stringify(solutions, null, 2));

  console.log(`\nDone! ${Object.keys(solutions).length} unique problems mapped.`);
  console.log(`Total solution entries fetched: ${totalFetched}`);
  console.log(`Output: ${outputPath}`);
}

main().catch(console.error);
