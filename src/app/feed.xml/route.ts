import { getAllArticles } from "@/lib/writing";

export async function GET() {
  const articles = getAllArticles();
  const siteUrl = "https://zheng.dev";

  const items = articles
    .map(
      (article) => `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <description><![CDATA[${article.description}]]></description>
      <link>${siteUrl}/writing/${article.slug}</link>
      <guid isPermaLink="true">${siteUrl}/writing/${article.slug}</guid>
      <pubDate>${new Date(article.date).toUTCString()}</pubDate>
    </item>
  `
    )
    .join("");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Zheng — Writing</title>
    <description>Thoughts on AI products, workflow design, and developer tools.</description>
    <link>${siteUrl}/writing</link>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
