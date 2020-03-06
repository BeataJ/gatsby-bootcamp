module.exports.onCreateNode = ({ node, getNote, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    console.log(JSON.stringify(node, undefined, 4))
  }
}
