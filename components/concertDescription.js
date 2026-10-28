import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";

// Concert descriptions are Markdown from Contentful, one piece per line
// ("Composer *Work*"). They render inside Concert's <p>, so paragraphs are
// unwrapped to avoid nesting <p> tags.
export default function ConcertDescription({ markdown }) {
  if (!markdown) return null;
  return (
    <ReactMarkdown
      remarkPlugins={[remarkBreaks]}
      components={{ p: ({ children }) => <>{children}</> }}
    >
      {markdown}
    </ReactMarkdown>
  );
}
