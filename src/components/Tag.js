const Tag = ({ tagName }) => {
  return (
    <a
      class='inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-blue-50 text-blue-600 hover:bg-blue-200 hover:text-blue-700 focus:ring-blue-500 mt-8'
      href='/'
      key={tagName}>
      {tagName}
    </a>
  );
};
export default Tag;
