var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": ""
},
{
  "id": "ch-WhoVenn-3",
  "level": "1",
  "url": "ch-WhoVenn-3.html",
  "type": "Section",
  "number": "1.1",
  "title": "John Venn",
  "body": " John Venn  Venn diagrams were introduced in 1880 by John Venn (1834-1923), \"M.A. Fellow and Lecturer in Moral Science, Caius College, Cambridge University\", in a paper entitled On the Diagrammatic and Mechanical Representation of Propositions and Reasonings which appeared in the Philosophical Magazine and Journal of Science S. 5. Vol. 9. No. 59. July 1880, [Ve80] .  John Venn was born August 4, 1834 in Hull, Yorkshire, England and died April 4, 1923 in Cambridge, England. Humberside changed to Yorkshire at the suggestion of Keith M. Briggs, \"since Humberside did not exist until the 1970's\". He came from a Low Church Evangelical background and in 1853 entered Gonville and Caius College of Cambridge University. In 1857 he was named a Fellow of the college. He was ordained a priest in 1859 and for a year was curate at Mortlake.  He published his first book Symbolic Logic in 1881 and The Principles of Empirical Logic in 1889. In 1883 John Venn was elected a Fellow of the Royal Society.  Venn wrote a history of his college, The Biographical History of Gonville and Caius College 1349-1897 (1897), and then began to compile a history of Cambridge University. He completed three volumes of the biographical history, and others continued the work, with Volume 7 published in 1978, and with the eighth volume reportedly in preparation.   The stained glass in Caius Hall at Cambridge University commemorating John Venn. Images courtesy of Anthony W.F. Edwards.       The use of diagrams in formal logic is not an easy history to trace, but it is certain that the diagrams that are popularly associated with Venn, in fact, originated much earlier. They are rightly associated with Venn, however, because he comprehensively surveyed and formalized their usage, and was the first to generalize them. It is worth noting that his book [Ve80] is still in print. For more of the history of Venn diagrams the reader is referred to the articles by Baron [Bar] and Hamburger and Pippert [HP00] , and the recent book by Edwards [Ed04] . The first use of the term Venn diagram , according to the 2nd edition of the Oxford English Dictionary, is in the book \"A Survey of Symbolic Logic\" by Clarence Irving Lewis, 1918.  The small image of John Venn at the top of this page is courtesy of the wonderful \"MacTutor History of Mathematics Archive\" [MAC] .   A painting of John Venn by Charles E. Brock. Photograph by Christopher Hurst, Hamilton-Kerr Institute, University of Cambridge. Reproduced by kind permission of the Master and Fellows of Gonville and Caius College.   A painting of John Venn    "
},
{
  "id": "ch-WhoVenn-3-6",
  "level": "2",
  "url": "ch-WhoVenn-3.html#ch-WhoVenn-3-6",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": " The stained glass in Caius Hall at Cambridge University commemorating John Venn. Images courtesy of Anthony W.F. Edwards.      "
},
{
  "id": "ch-WhoVenn-3-7",
  "level": "2",
  "url": "ch-WhoVenn-3.html#ch-WhoVenn-3-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Venn diagram "
},
{
  "id": "ch-WhoVenn-3-9",
  "level": "2",
  "url": "ch-WhoVenn-3.html#ch-WhoVenn-3-9",
  "type": "Figure",
  "number": "1.1.2",
  "title": "",
  "body": " A painting of John Venn by Charles E. Brock. Photograph by Christopher Hurst, Hamilton-Kerr Institute, University of Cambridge. Reproduced by kind permission of the Master and Fellows of Gonville and Caius College.   A painting of John Venn   "
},
{
  "id": "ch-VennWhatIs-4",
  "level": "1",
  "url": "ch-VennWhatIs-4.html",
  "type": "Section",
  "number": "2.1",
  "title": "Definition of Venn Diagrams",
  "body": " Definition of Venn Diagrams  We follow Grünbaum [Gr75] in first defining a more general concept, that of an independent family. Let be a collection of simple closed curves drawn in the plane. The collection is said to be an independent family if the region formed by the intersection of is nonempty, where each is either (the interior of ) or is (the exterior of ).  If, in addition, each such region is connected and there are only finitely many points of intersection between curves, then C is a Venn diagram , or an -Venn diagram if we wish to emphasize the number of curves in the diagram. The condition that there are only a finite number of intersection points is usually assumed in the literature, but often not stated explicitly. It rules out, e.g., segments of curves from intersecting.  Since each region is either inside or outside of a given curve, and there are curves, there must be exactly regions in a Venn diagram (including the exterior, empty region, which is outside of all curves). Note that some authors refer to diagrams with fewer than regions as Venn diagrams, but they are more properly termed Euler diagrams , after the mathematician Leonard Euler. More on these important diagrams can be found on the page on Generalizations and Extensions . We refer to a region enclosed by exactly curves as a -region or -set.           On the left we show the most familiar of all Venn diagrams. In this case , the simple closed curves are all circles, and in the leftmost diagram the 8 regions have been labelled with the interiors that are included in each intersection. The eighth region is the exterior region, corresponding to the empty set. The colored diagram has all 1-sets colored yellow, all 2-sets red, and the 3-set blue. This diagram also occurs as a minimal projection of the Borromean Rings, see .     On the left we show an example, for , of an independent family that is not a Venn diagram. Here the simple closed curves are each congruent triangles, which are colored red, blue, green, and gold. Note that the intersection of the interiors of the red and blue triangles with the exteriors of the green and gold triangles gives a disconnected region, the two darkly shaded regions in the figure.   The figure below is a Venn diagram of 4 ellipses, originally found by Venn himself [Ve80] . See also a black-and-white version and its Tutte embedding .   A simple Venn diagram is one in which no more than two curves intersect at a common point. Simple diagrams are in some sense the \"nicest\" as they are easiest to draw and understand. All of the figures in this chapter are simple, but we will see many examples in other chapters of non-simple diagrams. Unless stated otherwise, we assume that Venn diagrams are simple.  Finally, we note that the 3-circle diagram shown above, and the 2-circle diagram for 2 sets, appear often in the context of proving simple logical arguments. Readers interested in the applications of Venn diagrams to logical arguments are referred to the excellent introductory article by Glassner [Gl] , the book by Shin [Sh] , and many standard logic textbooks.  "
},
{
  "id": "ch-VennWhatIs-4-2",
  "level": "2",
  "url": "ch-VennWhatIs-4.html#ch-VennWhatIs-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "independent family "
},
{
  "id": "ch-VennWhatIs-4-3",
  "level": "2",
  "url": "ch-VennWhatIs-4.html#ch-VennWhatIs-4-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Venn diagram "
},
{
  "id": "fig-V3",
  "level": "2",
  "url": "ch-VennWhatIs-4.html#fig-V3",
  "type": "Figure",
  "number": "2.1.1",
  "title": "",
  "body": "   "
},
{
  "id": "fig-CO-V3",
  "level": "2",
  "url": "ch-VennWhatIs-4.html#fig-CO-V3",
  "type": "Figure",
  "number": "2.1.2",
  "title": "",
  "body": "   "
},
{
  "id": "ch-VennWhatIs-4-8",
  "level": "2",
  "url": "ch-VennWhatIs-4.html#ch-VennWhatIs-4-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "simple "
},
{
  "id": "sec-VennExist",
  "level": "1",
  "url": "sec-VennExist.html",
  "type": "Section",
  "number": "2.2",
  "title": "Constructions of Venn Diagrams",
  "body": " Constructions of Venn Diagrams  Above we saw that Venn diagrams exist for , and it is easy to see (for example, by removing circles) that Venn diagrams exist for . Diagrams exist for all larger values of as well. There have been several general constructions published (see [Be] , [RRS] , [Mo] , [AC] , and [FGK] , for a sampling in chronological order); we explain two of them below. They both have the nice property that they produce simple diagrams and have easy to explain inductive constructions. In both cases, a new curve is added by drawing a new curve that \"follows\" an existing curve ; in one case, and in the other case .   Venn's Construction   Venn's construction, outlined in his original paper [Ve80] , is best explained by considering the figure to the right. Start with the 3 circle diagram. Curves are successively added, with the new curve tracing the one last added and dividing each existing region in two. In the figure they are added in the order blue (4), red (5), and green (6). It should be clear where the seventh curve would be drawn.      Edwards' Construction    Anthony Edwards [Ed89a] , [Ed89b] developed another general inductive construction that has several nice properties, including some symmetry. It is also best explained by means of an example; refer to the diagram on the left. For the diagram consists of two perpendicular lines. (Strictly speaking we have to join the endpoints of these lines to make them into simple closed curves.) For a circle is added, centered at the point of intersection of the lines. Successive curves will all be added that follow this circle, weaving back and forth along the circle, again dividing each region in two. For the blue, red, and green curves are added, in that order.   These diagrams have very attractive bipartite colourings as can be seen below. The reason for calling these colourings \"bipartite\" is explained in Chapter , Graphs Associated with Venn Diagrams.    shows .  shows .  shows .  shows .  shows .  shows .        Venn Diagrams and Knots  Every simple Venn diagram can be \"woven\" in to a link A link is a finite collection of non-intersecting knots (where a knot is a closed, non-self-intersecting curve that is embedded in three dimensions. ; as one traverses any curve, the other curves alternately go over and under. The reader will find it an interesting exercise to prove that this is always possible for any collection of simple closed curves in the plane. For example, below we show the link that arises (after some smooth transformations in 3-space) from Venn's general construction for . This is clearly the same as the link that arises from Edwards' general construction for , although the constructions give different links for .    "
},
{
  "id": "sec-VennExist-5-2",
  "level": "2",
  "url": "sec-VennExist.html#sec-VennExist-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "link "
},
{
  "id": "sec-Borromean",
  "level": "1",
  "url": "sec-Borromean.html",
  "type": "Section",
  "number": "2.3",
  "title": "Borromean Rings",
  "body": " Borromean Rings  The Borromean rings consists of three interlocking rings, with the property that if any one of them is removed, then all three separate. The name Borromean comes from the Borromeo family of Renaissance Italy, who used them as their family \"crest\". Below we show the Borromean rings. The shadow, a minimal projection of the rings, is the familiar 3-Venn diagram. By minimal projection of a knot or link onto the plane we simply mean a projection that has the least number of intersections.   Below are two other illustrations of the Borromean rings. The one on the left is not a minimal projection (and isn't a Venn diagram). On the right is a rendering that has a great deal of symmetry as an object in three dimensional space.      The top diagram is by Toby Orloff and Delle Maxwell, 1990. Copyright by The Geometry Center [GC] , University of Minnesota, used with permission. The left diagram of the second figure is courtesy of Robert Scharein and is from his wonderful KnotPlot Site [KP] .  There is an interesting article on the Borromean rings in the The Mathematical Intelligencer, Winter 1995, Vol 17, No. 1. (Should this go in references?)  There is another interesting historical context in which the rings arise. The diagram was found in picture-stones on Gotland, an island in the Baltic sea off the southeast coast of Sweden. These are dated around the ninth century and are thought to tell tales from the Norse myths. To the Norse people of Scandinavia, a drawing of the Borromean rings using triangles is known as \"Odin's triangle\" of the \"Walknot\" (or \"valknut\" -- the knot of the slain). The symbol was also carved on the bedposts used in their burials at sea.  For further information, particularly of a mathematical nature, about Borromean rings and their generalizations, see the web page [SJ] of Slavick Jablan.  "
},
{
  "id": "sec-Borromean-2",
  "level": "2",
  "url": "sec-Borromean.html#sec-Borromean-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "minimal "
},
{
  "id": "ch-VennWhatIs-7",
  "level": "1",
  "url": "ch-VennWhatIs-7.html",
  "type": "Section",
  "number": "2.4",
  "title": "Extra Diagrams",
  "body": " Extra Diagrams  This section is a placeholder for certain ancillary diagrams that are referred to in other sections in this chapter. The online reader is encouraged to simply ignore this section; in printed book form it might be useful.   A 4-Venn diagram drawn with ellipses. Created by Stuart Anderson.      The Tutte embedding of the 4-Venn diagram. Created by Stuart Anderson.       Edwards construction for      Edwards construction for      Edwards construction for        Edwards construction for      Edwards construction for      Edwards construction for      "
},
{
  "id": "img-ellipses",
  "level": "2",
  "url": "ch-VennWhatIs-7.html#img-ellipses",
  "type": "Figure",
  "number": "2.4.1",
  "title": "",
  "body": " A 4-Venn diagram drawn with ellipses. Created by Stuart Anderson.    "
},
{
  "id": "img-Tutte4",
  "level": "2",
  "url": "ch-VennWhatIs-7.html#img-Tutte4",
  "type": "Figure",
  "number": "2.4.2",
  "title": "",
  "body": " The Tutte embedding of the 4-Venn diagram. Created by Stuart Anderson.    "
},
{
  "id": "img-n2c",
  "level": "2",
  "url": "ch-VennWhatIs-7.html#img-n2c",
  "type": "Figure",
  "number": "2.4.3",
  "title": "",
  "body": " Edwards construction for    "
},
{
  "id": "img-n3c",
  "level": "2",
  "url": "ch-VennWhatIs-7.html#img-n3c",
  "type": "Figure",
  "number": "2.4.4",
  "title": "",
  "body": " Edwards construction for    "
},
{
  "id": "img-n4c",
  "level": "2",
  "url": "ch-VennWhatIs-7.html#img-n4c",
  "type": "Figure",
  "number": "2.4.5",
  "title": "",
  "body": " Edwards construction for    "
},
{
  "id": "img-n5c",
  "level": "2",
  "url": "ch-VennWhatIs-7.html#img-n5c",
  "type": "Figure",
  "number": "2.4.6",
  "title": "",
  "body": " Edwards construction for    "
},
{
  "id": "img-n6c",
  "level": "2",
  "url": "ch-VennWhatIs-7.html#img-n6c",
  "type": "Figure",
  "number": "2.4.7",
  "title": "",
  "body": " Edwards construction for    "
},
{
  "id": "img-n7c",
  "level": "2",
  "url": "ch-VennWhatIs-7.html#img-n7c",
  "type": "Figure",
  "number": "2.4.8",
  "title": "",
  "body": " Edwards construction for    "
},
{
  "id": "ch-VennGraphs-3",
  "level": "1",
  "url": "ch-VennGraphs-3.html",
  "type": "Section",
  "number": "3.1",
  "title": "The Planar Dual of a Venn Diagram",
  "body": " The Planar Dual of a Venn Diagram  An -Venn diagram may be regarded as a graph in two ways. The diagram itself can be thought of as an edge-colored plane A planar graph is one that can be embedded in the plane without crossing edges. A plane graph is a planar graph that has been embedded in the plane. graph whose vertices correspond to intersections of curves, and whose edges correspond to the segments of curves between intersections. Edges are colored according to the curve to which they belong. Following Chilakamarri, Hamburger, and Pippert [CHP95] , we overload the term and call this graph the Venn diagram . In an unlabelled Venn diagram we ignore the edge labels. As an example, the three circle Venn diagram has 6 vertices (corresponding to the 6 intersections) and 12 edges. Recall Euler's formula relating the number of faces, edges, and vertices of a graph embedded in the plane. Assuming that no three curves intersect at a common point (i.e., a simple Venn diagram), the graph is 4-regular and so we have . By definition the number of faces is . It thus follows that and for simple Venn diagrams.  Two curves can meet at a point transversally or not, depending on whether the two curves cross. A moment's reflection will convince you that the curves in a simple Venn diagram must meet transversally. More generally, at any point of intersection in a Venn diagram, there must be at least two curves that meet transversally.  With each Venn diagram, , we may associate another plane graph called the Venn dual , which is denoted , the planar dual of the Venn diagram. (Warning: Some authors use the term \"Venn graph\" to refer to the dual.) Its vertices are the connected open regions (faces) of . Two vertices are connected by an edge if they share a common boundary. By default the edges are colored (by the color of the corresponding edge in the Venn diagram). At times it is also useful to label the vertices with a length- bitstring consisting of 0s and 1s; if the curves are labelled 1 to then we set bit to 1 if the vertex is enclosed by curve , 0 otherwise. Labels of adjacent vertices differ in exactly one bit position as one curve in the Venn diagram is crossed by one edge in the Venn dual. For example, the Venn dual of the three circle Venn diagram is a planar embedding of the 3-cube, . Clearly, every -Venn dual is a planar spanning subgraph of the -cube, . If is a simple Venn diagram, then every face of is a quadrilateral, and thus is a maximal bipartite A bipartite graph is one in which the vertices can be partitioned into two sets and where every edge is incident with a vertex from and a vertex from . The -cube is bipartite, and thus so is the Venn dual. planar graph.   Above we illustrate these definitions. The following list contains links to illustrations of some Venn duals.   The Venn Duals of Venn's Construction  Here are the Venn dual graphs of Venn's general construction for , but without coloured edges for the corresponding to the curves. Here the red edges indicate the Hamilton cycle that is used in extending to the next higher value of .   How, in general, do you go from the dual graph of a Venn diagram, together with a Hamilton cycle in , and get a new planar dual of a Venn diagram of the next higher order? We now explain this process. Note that is a simple closed curve with an interior and an exterior.   We illustrate the discussion with the expansion of to as shown above. Color the edges of red, edges on the interior blue, and edges on the exterior black.   Each (black) vertex of is split into two vertices, one green and one blue, in . The blue vertices are in the interior, the red edges in the exterior.  Each blue edge in becomes a blue edge in connecting the corresponding blue vertices.  Each black edge in becomes a black edge in connecting the corresponding green vertices.  Each red edge in becomes a 4-cycle of red edges in , connecting either corresponding vertices or vertices of the same color.   Note that the red edges in give the prism of the Hamilton cycle in .  Peter Winkler provides a similar discussion in [Wi,pg. 271] .    "
},
{
  "id": "ch-VennGraphs-3-2",
  "level": "2",
  "url": "ch-VennGraphs-3.html#ch-VennGraphs-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "planar graph plane graph Venn diagram unlabelled "
},
{
  "id": "ch-VennGraphs-3-3",
  "level": "2",
  "url": "ch-VennGraphs-3.html#ch-VennGraphs-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "transversally "
},
{
  "id": "ch-VennGraphs-3-4",
  "level": "2",
  "url": "ch-VennGraphs-3.html#ch-VennGraphs-3-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Venn dual bipartite "
},
{
  "id": "ch-VennGraphs-4",
  "level": "1",
  "url": "ch-VennGraphs-4.html",
  "type": "Section",
  "number": "3.2",
  "title": "When are two Venn diagrams different?",
  "body": " When are two Venn diagrams different?  Answering this question is a bit subtle and depends on whether the diagrams is regarded as being embedded in the plane or on a sphere, whether the curves are coloured or not, and so on.   Two Venn diagrams are isomorphic if, by a continuous transformation of the plane, one of them can be changed into the other or its mirror image.    Two Venn diagrams are equivalent if they are isomorphic as plane graphs, ignoring the edge colors (that is, isomorphic as planar graphs embedded in the plane).   Since curves meet transversally in simple Venn diagrams, two simple Venn diagrams are isomorphic if and only if they are equivalent.  On the other hand, a Venn diagram may be embedded on the surface of a sphere via stereographic projection. (Consider the standard basketball ball; it is the stereographic projection of Edwards' general construction for .) Sometimes it is more natural to look at Venn diagrams as being embedded on the sphere.   Two Venn diagrams are in the same class if they can be projected to the same spherical Venn diagram.   When considering non-simple Venn diagrams there is another elementary operation that can sometimes be applied to one diagram to get another.   [rigid diagram, seperable vertex]  A vertex traversal of a vertex in a Venn diagram is a circular sequence of the curves adjacent to , when read in a clockwise rotation around . A vertex is said to be separable if its vertex traversal has the property that for some , there is a such that the intersection of and consists of one curve, say , and in addition, and . In the example below the sets and are = { red, green, black, red, green} and = {blue, yellow, black, blue, yellow}, and the black curve is the curve . A Venn diagram is said to be rigid if it has no separable vertices. The figures below illustrate the operation of splitting a separable vertex; unsplitting (or joining )is defined as the inverse operation.     A seperable vertex     Splitting that vertex     Note that the vertex of Figure is part of a Venn diagram if and only if the two vertices of Figure are part of a Venn diagram. Simple diagrams are in many ways the most visually pleasing of Venn diagrams. Rigid Venn diagrams are interesting because in the equivalence class of diagrams under splitting and unsplitting of vertices, they are the ones closest to being simple.  FINISH THIS LATER   "
},
{
  "id": "def-isomorphic",
  "level": "2",
  "url": "ch-VennGraphs-4.html#def-isomorphic",
  "type": "Definition",
  "number": "3.2.1",
  "title": "",
  "body": " Two Venn diagrams are isomorphic if, by a continuous transformation of the plane, one of them can be changed into the other or its mirror image.  "
},
{
  "id": "def-equivalent",
  "level": "2",
  "url": "ch-VennGraphs-4.html#def-equivalent",
  "type": "Definition",
  "number": "3.2.2",
  "title": "",
  "body": " Two Venn diagrams are equivalent if they are isomorphic as plane graphs, ignoring the edge colors (that is, isomorphic as planar graphs embedded in the plane).  "
},
{
  "id": "def-class",
  "level": "2",
  "url": "ch-VennGraphs-4.html#def-class",
  "type": "Definition",
  "number": "3.2.3",
  "title": "",
  "body": " Two Venn diagrams are in the same class if they can be projected to the same spherical Venn diagram.  "
},
{
  "id": "ch-VennGraphs-4-9",
  "level": "2",
  "url": "ch-VennGraphs-4.html#ch-VennGraphs-4-9",
  "type": "Definition",
  "number": "3.2.4",
  "title": "[rigid diagram, seperable vertex].",
  "body": " [rigid diagram, seperable vertex]  A vertex traversal of a vertex in a Venn diagram is a circular sequence of the curves adjacent to , when read in a clockwise rotation around . A vertex is said to be separable if its vertex traversal has the property that for some , there is a such that the intersection of and consists of one curve, say , and in addition, and . In the example below the sets and are = { red, green, black, red, green} and = {blue, yellow, black, blue, yellow}, and the black curve is the curve . A Venn diagram is said to be rigid if it has no separable vertices. The figures below illustrate the operation of splitting a separable vertex; unsplitting (or joining )is defined as the inverse operation.  "
},
{
  "id": "fig-seperable",
  "level": "2",
  "url": "ch-VennGraphs-4.html#fig-seperable",
  "type": "Figure",
  "number": "3.2.5",
  "title": "",
  "body": " A seperable vertex   "
},
{
  "id": "fig-splitting",
  "level": "2",
  "url": "ch-VennGraphs-4.html#fig-splitting",
  "type": "Figure",
  "number": "3.2.6",
  "title": "",
  "body": " Splitting that vertex   "
},
{
  "id": "ch-VennGraphs-5",
  "level": "1",
  "url": "ch-VennGraphs-5.html",
  "type": "Section",
  "number": "3.3",
  "title": "How many are there?",
  "body": " How many are there?  The precise number of Venn diagrams and Venn classes has been determined by Chilakamarri, Hamburger and Pippert [CHP96b] , [HP97] , [CHP00] for , and for simple diagrams and classes if . Clearly, for there is only one diagram but, perhaps surprisingly, things get interesting for .   Diagrams with curves  For there are six distinct Venn classes and fourteen distinct Venn diagrams. Only one of the diagrams is simple (Class 6). We denote the diagrams as #3.1, #3.2, ..., #3.14 in order to refer to them later. Each class has two corresponding Figures  Class 1 (#3.1,#3.2): , .  Class 2 (#3.3,#3.4): , .  Class 3 (#3.5,#3.6): , .  Class 4 (#3.7,#3.8,#3.9,#3.10): , .  Class 5 (#3.11,#3.12,#3.13): , .  Class 6 (#3.14): , .     Note that classes 2 and 3 are equivalent but not isomorphic, as are diagrams #3.3 & #3.6 (and #3.4 & #3.5). Diagram #3.3 appears also in [ES] (showing that it is a convex ADD LINK diagram). The diagrams in Class 2 have the property that each pair of curves at a point of intersection meet transversally; the diagrams of Class 3 do not have this property. Aside from the simple diagram of Class 6, only Class 2 is rigid; the other classes are non-rigid.    Diagrams with curves  For there are two distinct simple Venn diagrams and one distinct simple Venn class (this was first observed by Grünbaum [Gr92a,p.8] and proven in [CHP96b] ). Drawings of these two are shown in Figures 4 (a) and (b) in [Gr92a,p.7] , and are redrawn here:     Diagrams with curves  For , there are 11 distinct, reducible, simple Venn classes and 12 distinct, reducible, simple Venn diagrams. Drawings of these may be found in [HP97] . There are 8 distinct simple, irreducible Venn classes ( [CHP00] ). Five of them have one convex drawing in the plane (and four of these were discovered by Grünbaum). All five can be drawn with five congruent ellipses. Thus, in total, there are 19 simple Venn classes for .  In proving these results several theorems of independent interest were proven:   A simple Venn diagram for is 3-connected.   A theorem of Whitney [Wh] states that a plane embedding of a 3-connected planar graph is unique, once the outer face has been identified. Thus, to determine whether two Venn diagrams are in the same class, we need only try all possible embeddings of one of them with each of its faces as the outer region and observe whether any of these embeddings is isomorphic to the other diagram.   A simple Venn dual for is 3-connected.    No two edges in a face in a Venn diagram belong to the same curve.     Diagrams with curves  The total number of Venn diagrams for is not known. As part of his search for 6-Venn triangles, Carroll [Ca99] reports that there are 1833 non-isomorphic simple monotone 6-Venn diagrams with the additional property that there are no more than 6 crossings between any pair of curves.   "
},
{
  "id": "ch-VennGraphs-5-5-4",
  "level": "2",
  "url": "ch-VennGraphs-5.html#ch-VennGraphs-5-5-4",
  "type": "Theorem",
  "number": "3.3.1",
  "title": "",
  "body": " A simple Venn diagram for is 3-connected.  "
},
{
  "id": "ch-VennGraphs-5-5-6",
  "level": "2",
  "url": "ch-VennGraphs-5.html#ch-VennGraphs-5-5-6",
  "type": "Theorem",
  "number": "3.3.2",
  "title": "",
  "body": " A simple Venn dual for is 3-connected.  "
},
{
  "id": "ch-VennGraphs-5-5-7",
  "level": "2",
  "url": "ch-VennGraphs-5.html#ch-VennGraphs-5-5-7",
  "type": "Theorem",
  "number": "3.3.3",
  "title": "",
  "body": " No two edges in a face in a Venn diagram belong to the same curve.  "
},
{
  "id": "ch-VennGraphs-6",
  "level": "1",
  "url": "ch-VennGraphs-6.html",
  "type": "Section",
  "number": "3.4",
  "title": "Extending Venn Diagrams",
  "body": " Extending Venn Diagrams  In this section we are concerned with trying to use an existing -Venn diagram to produce a Venn diagram with more than curves.   A -Venn diagram is reducible if the removal of one of its curves results in a Venn diagram with curves. A Venn diagram that is not reducible is irreducible .   The two general constructions, by their nature, both yield reducible diagrams. The symmetric ellipse diagram shown in is irreducible. Removing curve 4 results in an independent family in which the region corresponding to the set {1} is disconnected (the cyan shaded region of the figure). Since the diagram is symmetric, no matter what curve is removed, the result is not a Venn diagram.  For a long time it was not known whether a reducible Venn diagram whose curves are ellipses existed or not; such a diagram was discovered by Hamburger and Pippert [HP00] and is shown below. WHERE IS IT???   A -Venn diagram is extendible if there is a curve that can be added to it to make an -Venn diagram, . Diagram is said to be an extension of .   Winkler [Wi] makes the following two observations:   For , a simple -Venn diagram is extendible to a simple -Venn diagram if and only if its Venn dual is Hamiltonian.    If the -Venn diagram is an extension of an -Venn diagram, then is extendible to an -Venn diagram.   To prove the latter theorem, let B be the diagram whose extension is C . By , The curve added to to get corresponds to a Hamiltonian cycle in D( B ). In D( C ), curve becomes the prism The prism of a graph is formed by taking two copies of and adding a perfect matching whose edges join corresponding copies of vertices. , , of a cycle of length . Since the prism of a cycle is Hamiltonian, is extendible.  Edwards' general construction is a manifestation of this proof of , where the Hamilton cycle in is the one that alternates back and forth between the two copies of the cycle, two vertices at a time from each cycle. Venn's general construction is related but different since it uses non-prism edges (see ).   Winkler's Conjecture  Winkler [Wi] conjectured that every simple Venn diagram of curves can be extended to a simple Venn diagram of curves by the addition of a suitable curve. This conjecture was modified by Grünbaum [Gr92b] by removing the restriction of simplicity; i.e., his conjecture was that every Venn diagram is extendible. Grünbaum's version was proven by Chilakamarri, Hamburger, and Pippert [CHP96a] , but Winkler's original conjecture remains unsettled.  The proof of [CHP96a] introduces the radual graph , of the Venn diagram, which, for an arbitrary plane graph, is the union of the radial graph and the dual graph (Ore [Or] has more information on the radial and dual graphs). A simple example, using Venn diagram #3.4, is shown in Figure . The strategy of their proof is first to show that is a simple triangulation without separating triangles and then invoke a theorem of Whitney [Wh] that any such graph is Hamiltonian. It is then easy to see that the Hamilton cycle in the radual graph can be used as the additional curve. This sufficient condition is also necessary as stated in this analogue of .   For , a -Venn diagram is extendible to a -Venn diagram if and only if its radual graph is Hamiltonian.    "
},
{
  "id": "ch-VennGraphs-6-3",
  "level": "2",
  "url": "ch-VennGraphs-6.html#ch-VennGraphs-6-3",
  "type": "Definition",
  "number": "3.4.1",
  "title": "",
  "body": " A -Venn diagram is reducible if the removal of one of its curves results in a Venn diagram with curves. A Venn diagram that is not reducible is irreducible .  "
},
{
  "id": "ch-VennGraphs-6-6",
  "level": "2",
  "url": "ch-VennGraphs-6.html#ch-VennGraphs-6-6",
  "type": "Definition",
  "number": "3.4.2",
  "title": "",
  "body": " A -Venn diagram is extendible if there is a curve that can be added to it to make an -Venn diagram, . Diagram is said to be an extension of .  "
},
{
  "id": "thm-A",
  "level": "2",
  "url": "ch-VennGraphs-6.html#thm-A",
  "type": "Theorem",
  "number": "3.4.3",
  "title": "",
  "body": " For , a simple -Venn diagram is extendible to a simple -Venn diagram if and only if its Venn dual is Hamiltonian.  "
},
{
  "id": "thm-B",
  "level": "2",
  "url": "ch-VennGraphs-6.html#thm-B",
  "type": "Theorem",
  "number": "3.4.4",
  "title": "",
  "body": " If the -Venn diagram is an extension of an -Venn diagram, then is extendible to an -Venn diagram.  "
},
{
  "id": "ch-VennGraphs-6-12-3",
  "level": "2",
  "url": "ch-VennGraphs-6.html#ch-VennGraphs-6-12-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "radual graph "
},
{
  "id": "thm-extendible",
  "level": "2",
  "url": "ch-VennGraphs-6.html#thm-extendible",
  "type": "Theorem",
  "number": "3.4.5",
  "title": "",
  "body": " For , a -Venn diagram is extendible to a -Venn diagram if and only if its radual graph is Hamiltonian.  "
},
{
  "id": "ch-VennGraphs-7",
  "level": "1",
  "url": "ch-VennGraphs-7.html",
  "type": "Section",
  "number": "3.5",
  "title": "Venn diagrams made from congruent curves",
  "body": " Venn diagrams made from congruent curves   The first part of this section is more \"geometric\" than \"graph theoretic\". We introduce congruent Venn diagrams here because the examples are used to illustrate graph theoretic definitions.    Congruent Venn Diagrams  The general constructions of Venn and Edwards outlined on the \"What is a Venn Diagram?\" page do not share a nice property of the first two figures on the same page (made from circles and triangles), namely, that they are constructed from congruent Two figures in the plane are congruent if one can be transformed into the other by rotations and translations in the plane. curves. Grünbaum [Gr92b] defines a Venn diagram to be nice if it is made from congruent curves, but we'll prefer to call them congruent Venn diagrams. The first such diagrams were constructed by Grünbaum in the seminal paper [ Gr75 ]. In [Gr92b] he discussed examples of congruent diagrams for up to 8 curves; many symmetric examples can be found in the .   Hamburger and Pippert [HP97] proved that there are simple reducible Venn diagrams with 5 congruent ellipses, in spite of the fact that Venn had stated that there are no such diagrams. In fact, there are two of them, but they are in the same class: one of their diagrams is shown to to the right.  Below we show a redrawing of Grünbaum's beautiful congruent Venn diagram (from [Gr75] ) made from 5 congruent ellipses which also has a rotational symmetry. The diagram on the left labels each region with the labels of all ellipses that contain the region. On the right, the regions are colored according to the number of ellipses in which they are contained: white (the external region) = 0, yellow = 1, red = 2, blue = 3, green = 4, and black = 5. Note that the number of regions colored with a given color corresponds to the appropriate binomial coefficient: #(white) = #(black) = 1, #(yellow) = #(green) = 5, and #(red) = #(blue) = 10.               Venn diagrams and \"Revolving Door\" lists  Note that some of the blue regions in the ellipse diagram above are \"adjacent\" in the sense that their boundary shares a common point. The sets corresponding to these regions differ by one element. The point of intersection acts like a \"revolving door\"; one element is removed from the subset, another element is added. Sometimes these adjacent regions form a \"cycle\", as in the diagram above. Another way of looking at the cycle is as the subgraph of the square The square of a graph , denoted , is the graph obtained by adding to the edge set of edges between vertices that are at distance 2 in , , of the Venn dual induced by those vertices corresponding to -subsets. These cycles give us revolving door listings of all the k -subsets of . Revolving door algorithms for listing various classes of -subsets have been developed by a variety of researchers [NW] , [Kn] . Below we list the subsets corresponding to the 1,2,3,4-subsets (yellow, red, blue, green) in the above diagram in a counter-clockwise rotation.       Because of the symmetry of the diagram, these circular listings have the property that they remain invariant when acted on by the cyclic permutation . These listings are related to combinatorial Gray codes; since Gray codes have many connections with symmetric diagrams we describe them further on the Variants on Symmetry page, .   "
},
{
  "id": "ch-VennGraphs-7-3-2",
  "level": "2",
  "url": "ch-VennGraphs-7.html#ch-VennGraphs-7-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "congruent nice congruent "
},
{
  "id": "fig-5ellipse",
  "level": "2",
  "url": "ch-VennGraphs-7.html#fig-5ellipse",
  "type": "Figure",
  "number": "3.5.1",
  "title": "",
  "body": "  "
},
{
  "id": "fig-5ellipse-coloured",
  "level": "2",
  "url": "ch-VennGraphs-7.html#fig-5ellipse-coloured",
  "type": "Figure",
  "number": "3.5.2",
  "title": "",
  "body": "  "
},
{
  "id": "fig-5ellipse-irreducible",
  "level": "2",
  "url": "ch-VennGraphs-7.html#fig-5ellipse-irreducible",
  "type": "Figure",
  "number": "3.5.3",
  "title": "",
  "body": "  "
},
{
  "id": "ch-VennGraphs-7-4-2",
  "level": "2",
  "url": "ch-VennGraphs-7.html#ch-VennGraphs-7-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "square "
},
{
  "id": "ch-VennGraphs-8",
  "level": "1",
  "url": "ch-VennGraphs-8.html",
  "type": "Section",
  "number": "3.6",
  "title": "Extra Diagrams",
  "body": " Extra Diagrams  This section is a placeholder for certain ancillary diagrams that are referred to in other sections in this chapter. The online reader is encouraged to simply ignore this section; in printed book form it might be useful.   The six Venn classes    The two 3-Venn diagrams (#3.1,#3.2) in Class 1.      The two 3-Venn diagrams (#3.1,#3.2) in Class 1 with regions coloured.        The two 3-Venn diagrams (#3.3,#3.4) in Class 2.      The two 3-Venn diagrams (#3.3,#3.4) in Class 2 with regions coloured.        The two 3-Venn diagrams (#3.5,#3.6) in Class 3.      The two 3-Venn diagrams (#3.5,#3.6) in Class 3 with regions coloured.        The four 3-Venn diagrams (#3.7,#3.8,#3.9,#3.10) in Class 4.      The four 3-Venn diagrams (#3.7,#3.8,#3.9,#3.10) in Class 4 with regions coloured.        The three 3-Venn diagrams (#3.11,#3.12,#3.13) in Class 5.      The three 3-Venn diagrams (#3.11,#3.12,#3.13) in Class 5 with regions coloured.      There is only one Venn diagram in class 6, the three circle Venn diagram: , with regions coloured,     The radual graph construction   Illustration of the proof of Theorem .      Minimum Venn diagram for curves This diagram has 8 vertices. It was discovered by Bette Bultena.   A minimum 5-Venn diagram.     A minimum 5-Venn diagram, with regions coloured by size.       Minimum Venn diagram for curves These diagrams have 21 vertices, and are rotationally symmetric. The first two are polar symmetric, and the second two are symmetric, but not polar symmetric. From [CR98] .   A minimum 7-Venn diagram.     A minimum 7-Venn diagram, with regions coloured by size.       A minimum 7-Venn diagram. One curve is coloured green.     A minimum 7-Venn diagram.      "
},
{
  "id": "img-Class1",
  "level": "2",
  "url": "ch-VennGraphs-8.html#img-Class1",
  "type": "Figure",
  "number": "3.6.1",
  "title": "",
  "body": " The two 3-Venn diagrams (#3.1,#3.2) in Class 1.    "
},
{
  "id": "img-CO-Class1",
  "level": "2",
  "url": "ch-VennGraphs-8.html#img-CO-Class1",
  "type": "Figure",
  "number": "3.6.2",
  "title": "",
  "body": " The two 3-Venn diagrams (#3.1,#3.2) in Class 1 with regions coloured.    "
},
{
  "id": "img-Class2",
  "level": "2",
  "url": "ch-VennGraphs-8.html#img-Class2",
  "type": "Figure",
  "number": "3.6.3",
  "title": "",
  "body": " The two 3-Venn diagrams (#3.3,#3.4) in Class 2.    "
},
{
  "id": "img-CO-Class2",
  "level": "2",
  "url": "ch-VennGraphs-8.html#img-CO-Class2",
  "type": "Figure",
  "number": "3.6.4",
  "title": "",
  "body": " The two 3-Venn diagrams (#3.3,#3.4) in Class 2 with regions coloured.    "
},
{
  "id": "img-Class3",
  "level": "2",
  "url": "ch-VennGraphs-8.html#img-Class3",
  "type": "Figure",
  "number": "3.6.5",
  "title": "",
  "body": " The two 3-Venn diagrams (#3.5,#3.6) in Class 3.    "
},
{
  "id": "img-CO-Class3",
  "level": "2",
  "url": "ch-VennGraphs-8.html#img-CO-Class3",
  "type": "Figure",
  "number": "3.6.6",
  "title": "",
  "body": " The two 3-Venn diagrams (#3.5,#3.6) in Class 3 with regions coloured.    "
},
{
  "id": "img-Class4",
  "level": "2",
  "url": "ch-VennGraphs-8.html#img-Class4",
  "type": "Figure",
  "number": "3.6.7",
  "title": "",
  "body": " The four 3-Venn diagrams (#3.7,#3.8,#3.9,#3.10) in Class 4.    "
},
{
  "id": "img-CO-Class4",
  "level": "2",
  "url": "ch-VennGraphs-8.html#img-CO-Class4",
  "type": "Figure",
  "number": "3.6.8",
  "title": "",
  "body": " The four 3-Venn diagrams (#3.7,#3.8,#3.9,#3.10) in Class 4 with regions coloured.    "
},
{
  "id": "img-Class5",
  "level": "2",
  "url": "ch-VennGraphs-8.html#img-Class5",
  "type": "Figure",
  "number": "3.6.9",
  "title": "",
  "body": " The three 3-Venn diagrams (#3.11,#3.12,#3.13) in Class 5.    "
},
{
  "id": "img-CO-Class5",
  "level": "2",
  "url": "ch-VennGraphs-8.html#img-CO-Class5",
  "type": "Figure",
  "number": "3.6.10",
  "title": "",
  "body": " The three 3-Venn diagrams (#3.11,#3.12,#3.13) in Class 5 with regions coloured.    "
},
{
  "id": "img-radual",
  "level": "2",
  "url": "ch-VennGraphs-8.html#img-radual",
  "type": "Figure",
  "number": "3.6.11",
  "title": "",
  "body": " Illustration of the proof of Theorem .   "
},
{
  "id": "img-min5",
  "level": "2",
  "url": "ch-VennGraphs-8.html#img-min5",
  "type": "Figure",
  "number": "3.6.12",
  "title": "",
  "body": " A minimum 5-Venn diagram.   "
},
{
  "id": "img-min5c",
  "level": "2",
  "url": "ch-VennGraphs-8.html#img-min5c",
  "type": "Figure",
  "number": "3.6.13",
  "title": "",
  "body": " A minimum 5-Venn diagram, with regions coloured by size.   "
},
{
  "id": "img-min7a",
  "level": "2",
  "url": "ch-VennGraphs-8.html#img-min7a",
  "type": "Figure",
  "number": "3.6.14",
  "title": "",
  "body": " A minimum 7-Venn diagram.   "
},
{
  "id": "img-min7aC",
  "level": "2",
  "url": "ch-VennGraphs-8.html#img-min7aC",
  "type": "Figure",
  "number": "3.6.15",
  "title": "",
  "body": " A minimum 7-Venn diagram, with regions coloured by size.   "
},
{
  "id": "img-min7b",
  "level": "2",
  "url": "ch-VennGraphs-8.html#img-min7b",
  "type": "Figure",
  "number": "3.6.16",
  "title": "",
  "body": " A minimum 7-Venn diagram. One curve is coloured green.   "
},
{
  "id": "img-min7bC",
  "level": "2",
  "url": "ch-VennGraphs-8.html#img-min7bC",
  "type": "Figure",
  "number": "3.6.17",
  "title": "",
  "body": " A minimum 7-Venn diagram.   "
},
{
  "id": "ch-VennSymmetric-3",
  "level": "1",
  "url": "ch-VennSymmetric-3.html",
  "type": "Section",
  "number": "4.1",
  "title": "Rotational Symmetry",
  "body": " Rotational Symmetry  "
},
{
  "id": "ch-VennSymmetric-4",
  "level": "1",
  "url": "ch-VennSymmetric-4.html",
  "type": "Section",
  "number": "4.2",
  "title": "Symmetric Diagrams for Small <span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(n\\)<\/span>",
  "body": " Symmetric Diagrams for Small   On this page we show many examples of symmetric Venn diagrams for specific values of n . For n = 2, there is only one Venn diagram and it can be drawn to be polar symmetric. For n = 3, there are two symmetric diagrams. The classic three circle diagram is monotone, simple, and has polar symmetry. Diagram #3.1 (shown in ) is also a monotone polar symmetric diagram, but it is not simple, nor is it rigid.    Symmetric diagrams with curves    The simple ellipse diagram shown to the left is from [Gr75] , and has a 5-fold rotational symmetry. It is the only simple symmetric Venn diagram for n =5; in the list below, there are several different renderings of it:    Rick Mabry observes that the link of five knots formed by weaving the Venn diagram shown above is a Brunnian link --- the removal of any knot causes the link to fall apart. Mabry has created a beautiful rendering of the link made from \"ice cream cone curves\", see .  A version created by the author is can be see in ; this diagram serves as an illustration of a symmetric Brunnian link 7 of order 5. (The usual depiction of the Borromean rings (see ) is a symmetric Brunnian link of order 3.) This Brunnian link is attributed to C. van de Walle by Stewart [St, pg. 106] .  A rendering of the diagram using 5 equilateral triangles is given by Grünbaum in [Gr92b] and redrawn here: .  Stuart Anderson provided us with the labelled Tutte embedding of the diagram; one curve is highlighted, see .    There are many non-simple symmetric diagrams for . The one shown here is a play on the result that Venn diagrams cannot be constructed from \"curves that are\" circles for ; a statement that is no longer true if the three words in quotation marks are removed.    We have done an exhaustive computer search of all symmetric Venn diagrams for (first reported in the 1997 version of this survey). The number of symmetric Venn diagrams for is 243, and the table below shows the number possessing particular attributes. It is a often a trivial matter to construct non-simple diagrams from simple ones by \"pinching together\" simple intersections, but this operation does not produce an essentially different diagram. Thus we are particularly interested in rigid diagrams, of which there are .   Classification of symmetric 5-Venn diagrams    Polar  Rigid  Monotone  Count    No  No  No  100    No  No  Yes  89    No  Yes  No  12    No  Yes  Yes  13    Yes  No  No  5    Yes  No  Yes  18    Yes  Yes  No  2    Yes  Yes  Yes  4     For , a symmetric minimum Venn diagram must have at least 10 vertices. There are exactly six symmetric rigid 5-Venn diagrams with 10 vertices. One of them is shown below. Three others may be seen in , , and .   The following table shows the number of symmetric diagrams classified according to the number of vertices and rigidity.   Counts of symmetric 5-Venn diagrams    vertices  10  15  20  25  30    total  72  111  49  10  1    rigid  6  12  12  0  1        Symmetric diagrams with curves     Referring to the case , Grünbaum [Gr75,p.19] wrote: \"at present it seems likely that no such diagram exists.\" However, Grünbaum himself later found examples of such diagrams [Gr92b] and in 1992 additional examples were also discovered by Anthony Edwards and independently by Carla Savage and Peter Winkler. One of Grünbaum's examples is a remarkable non-monotone simple symmetric Venn diagram (see and ). Below we summarize what is know about symmetric 7-Venn diagrams.     Symmetric diagrams with curves     Symmetric diagrams with curves   "
},
{
  "id": "ch-VennSymmetric-4-3-6",
  "level": "2",
  "url": "ch-VennSymmetric-4.html#ch-VennSymmetric-4-3-6",
  "type": "Table",
  "number": "4.2.1",
  "title": "Classification of symmetric 5-Venn diagrams",
  "body": " Classification of symmetric 5-Venn diagrams    Polar  Rigid  Monotone  Count    No  No  No  100    No  No  Yes  89    No  Yes  No  12    No  Yes  Yes  13    Yes  No  No  5    Yes  No  Yes  18    Yes  Yes  No  2    Yes  Yes  Yes  4    "
},
{
  "id": "ch-VennSymmetric-4-3-10",
  "level": "2",
  "url": "ch-VennSymmetric-4.html#ch-VennSymmetric-4-3-10",
  "type": "Table",
  "number": "4.2.2",
  "title": "Counts of symmetric 5-Venn diagrams",
  "body": " Counts of symmetric 5-Venn diagrams    vertices  10  15  20  25  30    total  72  111  49  10  1    rigid  6  12  12  0  1    "
},
{
  "id": "ch-VennSymmetric-5",
  "level": "1",
  "url": "ch-VennSymmetric-5.html",
  "type": "Section",
  "number": "4.3",
  "title": "Symmetric Diagrams for Small <span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(n\\)<\/span>",
  "body": " Symmetric Diagrams for Small  Stuff.  "
},
{
  "id": "sec-SymmVariant",
  "level": "1",
  "url": "sec-SymmVariant.html",
  "type": "Section",
  "number": "4.4",
  "title": "Variants on Symmetry",
  "body": " Variants on Symmetry  In this section blah blah.   Venn Diagrams and Gray Codes  Stuff about Gray codes.   "
},
{
  "id": "ch-VennSymmetric-7",
  "level": "1",
  "url": "ch-VennSymmetric-7.html",
  "type": "Section",
  "number": "4.5",
  "title": "Extra Diagrams",
  "body": " Extra Diagrams  This section is a placeholder for certain ancillary diagrams that are referred to in other sections in this chapter. The online reader is encouraged to simply ignore this section; in printed book form it might be useful.   Diagrams with 5 curves    Rick Mabry's 5-Venn \"ice cream cone curves\" .    The 5 ellipses rendered as a link. .    The 5 ellipses rendered with equilateral triangles. .    A Tutte embedding of the 5 ellipses. .      Minimum vertex 5-Venn diagram (min5a). .    Minimum vertex 5-Venn diagram (min5b). .    Minimum vertex 5-Venn diagram (min5c). .      Diagrams with 7 curves    A simple non-monotone symmetric 7-Venn diagram. .    Coloured version. .     "
},
{
  "id": "img-MabryIce",
  "level": "2",
  "url": "ch-VennSymmetric-7.html#img-MabryIce",
  "type": "Figure",
  "number": "4.5.1",
  "title": "",
  "body": " Rick Mabry's 5-Venn \"ice cream cone curves\" .  "
},
{
  "id": "img-GrunEllipseKnot",
  "level": "2",
  "url": "ch-VennSymmetric-7.html#img-GrunEllipseKnot",
  "type": "Figure",
  "number": "4.5.2",
  "title": "",
  "body": " The 5 ellipses rendered as a link. .  "
},
{
  "id": "img-5-VD-triangles",
  "level": "2",
  "url": "ch-VennSymmetric-7.html#img-5-VD-triangles",
  "type": "Figure",
  "number": "4.5.3",
  "title": "",
  "body": " The 5 ellipses rendered with equilateral triangles. .  "
},
{
  "id": "img-venn5-tutte",
  "level": "2",
  "url": "ch-VennSymmetric-7.html#img-venn5-tutte",
  "type": "Figure",
  "number": "4.5.4",
  "title": "",
  "body": " A Tutte embedding of the 5 ellipses. .  "
},
{
  "id": "img-minsymm5a",
  "level": "2",
  "url": "ch-VennSymmetric-7.html#img-minsymm5a",
  "type": "Figure",
  "number": "4.5.5",
  "title": "",
  "body": " Minimum vertex 5-Venn diagram (min5a). .  "
},
{
  "id": "img-minsymm5b",
  "level": "2",
  "url": "ch-VennSymmetric-7.html#img-minsymm5b",
  "type": "Figure",
  "number": "4.5.6",
  "title": "",
  "body": " Minimum vertex 5-Venn diagram (min5b). .  "
},
{
  "id": "img-minsymm5c",
  "level": "2",
  "url": "ch-VennSymmetric-7.html#img-minsymm5c",
  "type": "Figure",
  "number": "4.5.7",
  "title": "",
  "body": " Minimum vertex 5-Venn diagram (min5c). .  "
},
{
  "id": "img-GrunSymm7",
  "level": "2",
  "url": "ch-VennSymmetric-7.html#img-GrunSymm7",
  "type": "Figure",
  "number": "4.5.8",
  "title": "",
  "body": " A simple non-monotone symmetric 7-Venn diagram. .  "
},
{
  "id": "img-GrunSymm7color",
  "level": "2",
  "url": "ch-VennSymmetric-7.html#img-GrunSymm7color",
  "type": "Figure",
  "number": "4.5.9",
  "title": "",
  "body": " Coloured version. .  "
},
{
  "id": "ch-VennGeometric-3",
  "level": "1",
  "url": "ch-VennGeometric-3.html",
  "type": "Section",
  "number": "5.1",
  "title": "Convexity",
  "body": " Convexity  "
},
{
  "id": "VD_Book-9-2",
  "level": "1",
  "url": "VD_Book-9-2.html",
  "type": "Section",
  "number": "6.1",
  "title": "Combinatorial and existential problems",
  "body": " Combinatorial and existential problems  "
},
{
  "id": "VD_Book-9-3",
  "level": "1",
  "url": "VD_Book-9-3.html",
  "type": "Section",
  "number": "6.2",
  "title": "Geometric problems",
  "body": " Geometric problems  "
},
{
  "id": "VD_Book-9-4",
  "level": "1",
  "url": "VD_Book-9-4.html",
  "type": "Section",
  "number": "6.3",
  "title": "Generalizations of Venn diagrams",
  "body": " Generalizations of Venn diagrams  "
},
{
  "id": "ch-VennRefs-3",
  "level": "1",
  "url": "ch-VennRefs-3.html",
  "type": "Section",
  "number": "7.1",
  "title": "Print References",
  "body": " Print References   [AC] Daniel E. Anderson and Frank L. Cleaver, Venn-type diagrams for arguments of terms, J. Symbolic Logic, 30 (1965) 113-118.  [An] J. Anusiak, On Set-theoretically Independent Collections of Balls, Colloquium Mathematicum, 13 (1965) 223-233.  [Bak] M. J. C. Baker, All swans are white: some remarks on the diagrams of Euler and Venn, Australian Math. Soc. Gaz., 17 (1990) 161-167.  [Bar] Margaret E. Baron, A note on the historical development of logic diagrams: Leibniz, Euler, and Venn, Mathematical Gazette, 53 (1969) 113-125.  [Be] E. C. Berkeley, Boolean algebra (the technique for manipulating \"and\", \"or\", \"not\" and conditions) and applications to insurance, The Record, American Institute of Actuaries, 26 (1937) 373-414. [According to [Grün75] , this paper contains a general Venn diagram construction].   [Boy] A. V. Boyd, Venn diagram of rectangles, Mathematics Magazine, 58 (1985) 251.  [Bow] L. J. Bowles, Logic diagrams for up to classes, Mathematical Gazette, 55 (1971) 370-373.  [BR] Bette Bultena and Frank Ruskey, Venn Diagrams with Few Vertices, Electronic Journal of Combinatorics, Volume 5, #R44, (1998).  [BGR] Bette Bultena, Branko Grünbaum, and Frank Ruskey, Convex Drawings of Intersecting Families of Simple Closed Curves, 11th Canadian Conference on Computational Geometry, (1999) 18-21.  [Ca] Tao Cao, Computing all the simple symmetric monotone Venn diagrams on seven curves, Master's thesis, University of Victoria (2001).  [Ca99] J. Carroll, personal communication, December 1999.  [Ca00] J. Carroll, Drawing Venn triangles, Technical Report HPL-2000-73, HP Labs (2000).  [Ca05] J. Carroll, personal communication, May 2005.  [CHP95] K. B. Chilakamarri, P. Hamburger, and R. E. Pippert, Venn diagrams: announcement of some new results, Geombinatorics, 4 (1995) 129-137.  [CHP96a] K. B. Chilakamarri, P. Hamburger, and R. E. Pippert, Hamilton Cycles in Planar Graphs and Venn Diagrams, Journal of Combinatorial Theory (Series B), 67 (1996) 296-303.  [CHP96b] Kiran B. Chilakamarri, Peter Hamburger and Raymond E. Pippert, Venn diagrams and planar graphs, Geometriae Dedicata, 62 (1996) 73-91.  [CHP00] Kiran B. Chilakamarri, Peter Hamburger and Raymond E. Pippert, Analysis of Venn diagrams using cycles in graphs, Geometriae Dedicata, 82 (2000) 193-223.  [CR98] S. Chow and F. Ruskey, Searching for symmetric Venn diagrams, extended abstract, (1998).  [CR03] S. Chow and F. Ruskey, Drawing Area-Proportional Venn and Euler Diagrams, 11th International Symposium on Graph Drawing, Perugia, Italy, Lecture Notes in Computer Science, 2912 (2003) 466-477.  [CR05] S. Chow and F. Ruskey, Drawing minimum area Venn diagrams using polyominoes, manuscript, submitted (2005), 11 pages.  [Ci03] Barry Cipra, Diagram masters cry 'Venn-i, Vidi, Vici', Science, 299 (January 2003) 651.  [Ci04] Barry Cipra, Venn Meets Boole in Symmetric Proof, SIAM News, 37 no. 1 (January\/February 2004).  [Ed89a] Anthony W. F. Edwards, Venn diagrams for many sets, Bulletin of the International Statistical Institute, 47th Session, Paris (1989). Contributed papers, Book 1, 311-312.  [Ed89b] Anthony W. F. Edwards, Venn diagrams for many sets, New Scientist, 7 (January 1989) 51-56.  [Ed92] Anthony W. F. Edwards, Rotatable Venn Diagrams, Mathematics Review, 2 (February 1992) 19-21.  > [Ed96] Anthony W. F. Edwards, Seven-set Venn diagrams with rotational and polar symmetry, Combinatorics, Probability, and Computing, 7 (1998) 149-152.  [Ed04] Anthony W. F. Edwards, Cogwheels of the Mind: The Story of Venn Diagrams, The John Hopkins University Press, Baltimore, Maryland (2004).  [EE] Anthony W. F. Edwards and J. H. Edwards, Metrical Venn diagrams, Annals of Human Genetics 56 (1992), 71-75. Also reprinted in Cogwheels of the Mind ([Ed04]).  [ES] Anthony W. F. Edwards and C. A. B. Smith, New 3-set Venn diagram, Nature, (Scientific Correspondence), 339 (1989) 263.  [Eu] Leonard Euler, Lettres à une Princesse d'Allemagne, St. Petersburg, (1768). (Translated by Sir David Brewster, Edinburgh, W & C Tait, and Longman et al., 1823, Vol. 1. See in particular letters CII - CVIII on pages 337-366.)   [FGK] J. Chris Fisher, Branko Grünbaum, and E. L. Koh, Diagrams Venn and How, Mathematics Magazine, 61 (1988) 36-40.  [Ga] Martin Gardner, Logic, Machines, and Diagrams, McGraw-Hill, New York, (1958).  [GHKT] Joseph (Yossi) Gil, John Howse, Stuart Kent, and John Taylor, Projections in Venn-Euler Diagrams, in Proc. IEEE Symposium on Visual Languages, Seattle, Washington (2000) 119-126.  [Gl] Andrew Glassner, Venn and Now, IEEE Computer Graphics and Applications, Volume 23 (no. 4), (July\/August 2003), 82-95.  [GKP] Ronald Graham, Donald Knuth, and Oren Patashnik, Concrete Mathematics, Addison-Wesley, (1989). [Exercises about Venn diagrams (1.5 and 1.22) may be found on pages 17 and 20, with corresponding solutions on pages 483 and 486.]   [GKS] Jerrold Griggs, Charles E. Killian and Carla D. Savage, Venn Diagrams and Symmetric Chain Decompositions in the Boolean Lattice, Electronic Journal of Combinatorics, Volume 11 (no. 1), #R2, (2004).  [Gr75] Branko Grünbaum, Venn diagrams and Independent Families of Sets, Mathematics Magazine, 48 (Jan-Feb 1975) 12-23. [Grünbaum awarded the MAA Lester R. Ford prize for this paper in 1976 (see AMM, Aug-Sept. 1976, pg. 587).]   [Gr84a] Branko Grünbaum, The Construction of Venn Diagrams , The College Mathematics Journal, Vol. 15 No. 3 (1984) 238-247.  [Gr84b] Branko Grünbaum, On Venn Diagrams and the Counting of Regions, The College Mathematics Journal, Vol. 15 No. 5 (1984) 433-435.  [Gr92a] Branko Grünbaum, Venn Diagrams I, Geombinatorics, Volume I, Issue 4, (1992) 5-12.  [Gr92b] Branko Grünbaum, Venn Diagrams II, Geombinatorics, Volume II, Issue 2, (1992) 25-32.  [Gr99] Branko Grünbaum, The Search for Symmetric Venn Diagrams, Geombinatorics, 8 (1999) 104-109.  [GW] Branko Grünbaum and Peter Winkler, A Simple Venn Diagram of Five Triangles, Mathematics Magazine, 55 no. 5 (1982) 311.  [GLT] A. Gyárfás, J. Lehel, and Zs. Tuza, The structure of rectangle families dividing the plane into maximum number of atoms, Discrete Math. 52 (1984) 177-198. (MR 86g:05025)  [Ha98a] Peter Hamburger, Constructing Venn diagrams using graphs, Matematikai Lapok, 4 (1994) no. 2-3 (1998) 1-70. In Hungarian, with English summary.  [Ha98b] Peter Hamburger, A Graph-Theoretic Approach to Geometry, manuscript, 1998.  [Ha02] Peter Hamburger, Doodles and doilies, non-simple symmetric Venn diagrams, Discrete Math., a Special Issue in Honor of the 65th Birthday of Daniel J. Kleitman, (2-3) 257 (2002) 423-439.  [Ha02b] Peter Hamburger, Pretty drawings. More doodles and doilies, symmetric Venn diagrams, manuscript, (2002). [A shorter version (33 pages) will appear in Utilitas Mathematica]  [HH] Peter Hamburger and Edit Hepp, Symmetric Venn diagrams in the Plane: The Art of Assigning a Binary Bit String Code to Planar Regions Using Curves, Leonardo, MIT Press, accepted for publication, (2005).  [HPS] P. Hamburger, Gy. Petruska, and A. Sali, Saturated chain partitions in ranked partially ordered sets, and non-monotone symmetric 11-Venn diagrams, Studia Sci. Math. Hungar. 41 (2004) 147-191.  [HP97] P. Hamburger and R. E. Pippert, Simple, reducible Venn diagrams on five curves and Hamiltonian cycles, Geometriae Dedicata, (no. 3) 68 (1997) 245-262.  [HP00] P. Hamburger and R. E. Pippert, Venn said it couldn't be done, Mathematics Magazine, Vol. 73 No. 2 (April 2000) 105-110 .  [HP03] P. Hamburger and R. E. Pippert, A symmetrical beauty. A non-simple 7-Venn diagram with a minimum vertex set, Ars Combin. 66 (2003) 129-137.  [HS03] P. Hamburger and A. Sali, Symmetric 11-Venn diagrams with vertex sets 231, 242, ..., 352, Studia Sci. Math. Hungar., (1-2) 40 (2003) 121-143.  [HS04] P. Hamburger and A. Sali, 11-Doilies with vertex sets 275, 286, ..., 462, AKCE International Journal of Graphs and Combinatorics, 1 (2004) 109-133.  [He] D. W. Henderson, Venn diagrams for more than four classes, American Mathematical Monthly, 70 (1963) 424-426.  [Ji] Zongliang Jiang, Symmetric chain decompositions and independent families of curves, Master's thesis, Department of Computer Science, North Carolina State University, (2003).  [JP] D.S. Johnson and H.O. Pollack, Hypergraph Planarity and the Complexity of Drawing Venn Diagrams, Journal of Graph Theory, Vol. 3 No. 11 (1987) 309-325. [Earlier version appears in Colloquium on the Theory of Algorithms, North-Holland, 1985.]   [KRSW] Charles E. Killian, Frank Ruskey, Carla D. Savage, and Mark Weston, Half-Simple Symmetric Venn Diagrams, Electronic Journal of Combinatorics, Volume 11 (no. 1), #R86, (2004).  [LL] D.K.J. Lin and A.W. Lam, Connections Between Two-Level Factorials and Venn Diagrams , The American Statistician, 51 (1997) 49-51.  [MC] Arnaud Maes and Corinne Cerf, A family of Brunnian links based on Edwards' construction of Venn diagrams, J. Knot Theory Ramifications, 10 no. 1, (2001) 97-107.  [Mo] Trenchard More, Jr. On the construction of Venn diagrams, J. Symbolic Logic, 24 (1959) 303-304.  [No] P. Nowicki, Koniczynko -listna, [In Polish], Wiadom. Mat., 19 (1975) 11-18.  [Pa] Lewis Pakula, A note on Venn diagrams, American Mathematical Monthly, 96 (1989) 38-39. (MR 89k:51040)  [PS] Vern S. Poythress and Hugo S. Sun, A method to construct convex, connected Venn diagrams for any finite number of sets, The Pentagon, 31 (Spring 1972) 80-83.  [RRS] A. Rényi, V. Rényi, and J. Surányi, Sur l'indépendance des domaines simples dans l'Espace Euclidien a n dimensions, Colloquium Mathematicum, 2 (1951) 130-135. [Some erroneous statements made in this paper are corrected in [Gr75] ]   [RW] Frank Ruskey and Mark Weston, More fun with symmetric Venn diagrams, in Proceedings of Third International Conference on FUN with Algorithms, ed. P. Ferragina and R. Grossi, Tuscany, Italy, (2004), 235-246. [To appear in Theory of Computing Systems]  [Sc] A. J. Schwenk, Venn diagram for five sets, Mathematics Magazine, 57 (1984) 297.  [Sh] Sun-Joo Shin, The logical status of diagrams, Cambridge University Press, (1994). (MR 95j:03014)  [Ve80] J. Venn, On the diagrammatic and mechanical representation of propositions and reasonings, The London, Edinburgh, and Dublin Philosophical Magazine and Journal of Science, 9 (1880) 1-18.  [Ve81] J. Venn, Symbolic Logic, MacMillan, London 1881, 2nd ed., (1894). Reprinted by Lenox Hill Pub. & Dist. Co. (Burt Franklin), 1971 (S.B.N. 8337-36264).  [Weg] B. Weglorz, Nerves and Set-theoretical Independence, Colloquium Mathimaticum, 13 (1964) 17-19.  [Wes] Mark Weston, On symmetry in Venn diagrams and independent families, Master's thesis, University of Victoria, (2003).  [Wi] Peter Winkler, Venn diagrams: Some observations and an open problem, Congressus Numerantium, 45 (1984) 267-274.  "
},
{
  "id": "ch-VennRefs-4",
  "level": "1",
  "url": "ch-VennRefs-4.html",
  "type": "Section",
  "number": "7.2",
  "title": "Other References (not about Venn diagrams per se)",
  "body": " Other References (not about Venn diagrams per se)  [Kn] D. Knuth, The Art of Computer Programming: Volume 4A, Combinatorial Algorithms, Addison-Wesley, 2011.  [NW] A. Nijenhuis and H. S. Wilf, Combinatorial Algorithms, 2nd. ed., Academic Press, New York, London, 1978.  [Or] O. Ore, The Four-Color Problem, Academic Press, New York, London, 1967.  [St] Ian Stewart, Game, Set, and Math, Basil Blackwell, 1989.  [Wh] H. Whitney, A Theorem on Graphs, Annals of Math., 32 (1931) 378-390.  "
},
{
  "id": "ch-VennRefs-5",
  "level": "1",
  "url": "ch-VennRefs-5.html",
  "type": "Section",
  "number": "7.3",
  "title": "Electronic References",
  "body": " Electronic References  The following references are online and may disappear or change over time. The external sites listed below are not endorsed by The Electronic Journal of Combinatorics and do not form part of this article.   [MAC] The MacTutor site contains a biography of John Venn .  [KP] Robert Scharein's KnotPlot site . All figures with knots on this site were produced with KnotPlot.  [SJ] Slavik Jablan's page \"Are Borromean Links so Rare?\"   [GC] The Geometry Center at the University of Minnesota.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
