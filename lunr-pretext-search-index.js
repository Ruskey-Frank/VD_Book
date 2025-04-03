var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-3",
  "level": "1",
  "url": "frontmatter-3.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "frontmatter-4",
  "level": "1",
  "url": "frontmatter-4.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " Almost everyone has been exposed to Venn diagrams as part of their schooling. It is less well-known are that Venn diagrams exist for more than 3 categories or that interesting mathematics arises from their careful study.  Venn introduced his diagrams around 1880, but it wasn't until the pioneering papers of Branko Grünbaum, starting in 1975, that the mathematical study of Venn diagrams really took off.  I was first exposed to Branko's work much later. Although I wasn't a geometer, I received the announcements from the University of Washington of their geometry\/combinatorics seminars, and of course, had heard of Branko and Victor Klee, who were prominent mathematicians at U of W. Victoria is geographically close to Seattle, and there were some mathematical meetings that were organized in the geographic region. At the time I was keenly interesting in combinatorial Gray codes, and when an announcement came around about a professor from Cambridge University giving a talk about Venn Diagrams, in which the abstract mentioned Gray codes, I was intrigued even though I couldn't travel to Seattle then because of teaching commitments. So I called Branko and asked him whether his speaker might be willing to travel to Victoria and give the talk at the University of Victoria.  The speaker was Anthony Edwards and his talk was about his results about Venn diagrams, which included his general construction and it's shifted cousin (which is where the Gray codes came in), and about his search for seven curve rotationally symmetric Venn diagrams with an additional mirror-image symmetry, of which there were five. He also mentioned the open problem of finding an eleven curve rotationally symmetric Venn diagram, then next one possible, since such diagrams required a number of curves that is prime.  His search technique in some sense amounted to a interative exhaustive search through certain sets of constrained combinations. I was an expert in exhaustively listing combinations and brazenly thought that I would be able to solve his open problem without much effort. How wrong I was! I was able to show that his list of five diagrams was short; i.e., that there was a missing sixth diagram. But it was not until many years later, in 20??, that my grad student Khalegh Mamakani, was able to solve the problem for eleven curves.  Much of the material in this book first appeared in the Survey of Venn Diagrams that was published as a Dynamic Survey , in the Electronic Journal of Combintorics as the fifth dynamic survey and the only one that was a collection of html pages and not a pdf document. The original survey was first published in 1997 and had updates in 2001 and 2005. The last update was co-authored with my former Ph.D. student, Mark Weston.  The purpose of this book is to put together much of what is known about Venn diagrams from a mathematical perspective into one place that researchers and students can reference. It is hoped that it will spur further research into the area. With that in mind, there is an extensive collection of open problems at the end of the book.  Acknowledgements: Branko Grünbaum, Carla Savage, Peter Winkler, Rick Mabry, Don Knuth, Wendy Myrvold, Matthew Klimesh, Jeremy Carroll, Peter Rogers, Moshe Rosenfeld. Students: Stirling Chow, Mark Weston, Bette Bultena, Khalegh Mamakani.  "
},
{
  "id": "frontmatter-5",
  "level": "1",
  "url": "frontmatter-5.html",
  "type": "Author Biography",
  "number": "",
  "title": "Author Biography",
  "body": "  Frank is a retired professor of Computer Science at the University of Victoria (UVic). He completed his Ph.D. at the University of California at San Diego under the supervision of T.C. Hu in the department of Applied Physics and Information Science in 1978. His first appointment at UVic was also in 1978 in the Department of Mathematics, teaching various Computer Science courses. After a couple of years, the Department of Computer Science was established and he was one of the founding six members. He remained with the department until his retirement in 2019.  His research interests fall into the area of combinatorial algorithms and mathematics, with particular interest in combinatorial Gray codes, Venn diagrams, Tatami tilings, nested recurrence relations, and enumerative combinatorics. In his spare times he likes to play basketball, spend time at his off-grid cabin pretending to be a hunter-gatherer, and to spend time with his children and grand child.  "
},
{
  "id": "ch-WhoVenn-3",
  "level": "1",
  "url": "ch-WhoVenn-3.html",
  "type": "Section",
  "number": "1.1",
  "title": "John Venn",
  "body": " John Venn  Venn diagrams were introduced in 1880 by John Venn (1834-1923), M.A. Fellow and Lecturer in Moral Science, Caius College, Cambridge University , in a paper entitled On the Diagrammatic and Mechanical Representation of Propositions and Reasonings which appeared in the Philosophical Magazine and Journal of Science S. 5. Vol. 9. No. 59. July 1880, [Ve80] .  John Venn was born August 4, 1834 in Hull, Yorkshire, England and died April 4, 1923 in Cambridge, England. Humberside changed to Yorkshire at the suggestion of Keith M. Briggs, \"since Humberside did not exist until the 1970's\". He came from a Low Church Evangelical background and in 1853 entered Gonville and Caius College of Cambridge University. In 1857 he was named a Fellow of the college. He was ordained a priest in 1859 and for a year was curate at Mortlake.  He published his first book Symbolic Logic in 1881 and The Principles of Empirical Logic in 1889. In 1883 John Venn was elected a Fellow of the Royal Society.  Venn wrote a history of his college, The Biographical History of Gonville and Caius College 1349-1897 (1897), and then began to compile a history of Cambridge University. He completed three volumes of the biographical history, and others continued the work, with Volume 7 published in 1978, and with the eighth volume reportedly in preparation.   The stained glass in Caius Hall at Cambridge University commemorating John Venn. Images courtesy of Anthony W.F. Edwards.       The use of diagrams in formal logic is not an easy history to trace, but it is certain that the diagrams that are popularly associated with Venn, in fact, originated much earlier. They are rightly associated with Venn, however, because he comprehensively surveyed and formalized their usage, and was the first to generalize them. It is worth noting that his book [Ve80] is still in print. For more of the history of Venn diagrams the reader is referred to the articles by Baron [Bar] and Hamburger and Pippert [HP00] , and the recent book by Edwards [Ed04] . The first use of the term Venn diagram , according to the 2nd edition of the Oxford English Dictionary, is in the book \"A Survey of Symbolic Logic\" by Clarence Irving Lewis, 1918.  The small image of John Venn at the top of this page is courtesy of the wonderful \"MacTutor History of Mathematics Archive\" [MAC] . That is a good place to look for more details about him. For more comprehensive bibliographic information, the thesis [Cl] of Clewlow is recommended.   A painting of John Venn by Charles E. Brock. Photograph by Christopher Hurst, Hamilton-Kerr Institute, University of Cambridge. Reproduced by kind permission of the Master and Fellows of Gonville and Caius College.   A painting of John Venn    "
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
  "id": "sec-defs",
  "level": "1",
  "url": "sec-defs.html",
  "type": "Section",
  "number": "2.1",
  "title": "Definition of Venn Diagrams",
  "body": " Definition of Venn Diagrams  In a series of papers, starting with [Gr75] Branko Grünbaum, a well known geometer at the University of Washington, initiated the mathematical investigation of Venn diagrams. We will follow Grünbaum in first defining a more general concept, that of an independent family, and then move on to Venn diagrams. Both concepts are defined in terms of simple closed curves in the plane, which can be thought of as being drawn by starting at a point , and then drawing a non-intersecting curve that ends back at . The Jordan curve theorem states that such a curve partitions the plane into , together with two disjoint open regions , the interior of , and , the (unbounded) exterior of .   independent family   Let be a collection of simple closed curves drawn in the plane. The collection is said to be an independent family if the region formed by the intersection of is non-empty, where each is either or is . If, in addition, each such intersection region is connected and there are only finitely many points of intersection between curves, then C is a Venn diagram , or an -Venn diagram if we wish to emphasize the number of curves in the diagram.    Note that the term region in the mathematical literature is often assumed to be connected; when discussing Venn diagrams no confusion should arise. Since there are 2 choices for each , there are non-empty disjoint regions that result from the different intersections in the definition. One region, the one arising from the intersection of all the exteriors, is unbounded and all of the other regions are bounded. In a Venn diagram all regions are required to be connected , meaning that there is a curve joining any two points in a region, a curve that is entirely contained in the region. The condition that there are only a finite number of intersection points is usually assumed in the literature, but sometimes not stated explicitly. It rules out, e.g., segments of curves from intersecting. We will relax this restriction in .   Euler diagram Note that some authors refer to diagrams with fewer than non-empty regions as Venn diagrams, but they are more properly termed Euler diagrams , after the mathematician Leonard Euler. More on these important diagrams can be found in , Generalizations and Extensions of Venn Diagrams. We refer to a region enclosed by exactly curves as a -region or -set.    Regions labeled by inclusion.      Regions labeled by bitstrings.      Regions colored by size.      Above we show the most familiar of all Venn diagrams. In this case , the simple closed curves are all circles, and in the 8 regions have been labelled with the interiors that are included in each intersection. The eighth region is the exterior region, corresponding to the empty set. In , regions have been labelled with bitstrings (binary strings) of length , where inclusion in A is indicated by the first bit, B by the second bit, and C by the third bit. This labelling will also be used often in the sequel. The colored diagram has all 1-sets colored yellow, all 2-sets red, and the 3-set blue. Thus there is 1 0-set, 3 1-sets, 3 2-sets, and 1 3-sets. The 3 circle Venn diagram also occurs as a minimal projection of the Borromean Rings, see .    For , the number of -regions in a Venn diagram is .      An independent family that is not a Venn diagram     independent family On the left we show an example, for , of an independent family that is not a Venn diagram. Here the simple closed curves are each congruent triangles, which are colored red, blue, green, and gold. Note that the intersection of the interiors of the red and green triangles with the exteriors of the blue and gold triangles gives a disconnected region, the two cross-hatched regions in the figure. For an example of intersecting closed curves that are not an independent family, consider the five Olympic Rings.   The figure below is a Venn diagram of 4 ellipses, a colored version of one originally found by Venn himself [Ve80] . See also a black-and-white version and its Tutte embedding .   A simple 4-Venn diagram.     Venn diagram simple   A simple Venn diagram is one in which no more than two curves intersect at a common point.    Simple diagrams are in some sense the nicest as they are easiest to draw and understand. All of the figures in this chapter are simple, but we will see many examples in other chapters of non-simple diagrams. Unless stated otherwise, we assume that Venn diagrams are simple.  You often see 2, and 3 curve Venn diagrams drawn with circles, but all diagrams with 4 circles seem to have the wrong number of regions. In the next chapter we'll prove a little theorem that implies that a 4-Venn diagram can never be drawn with circles, even if they have varying diameters. The basic reason is that there are too many regions for the possible number of intersections. Below we make two observations. The reader is encouraged to try to figure out why these are true.   Suppose two curves intersect at a point . The curves can cross at , in which case we say that they intersect transversally . If they do not cross, then we say that they intersect non-transversally , or that they kiss . transversal intersection      In a simple Venn diagram, at every point of intersection, the two curves meet transversally. I.e., the two curves cross and do not meerly kiss each other. More generally, at any point of intersection in a Venn diagram, there must be at least two curves that meet transversally.    Suppose that curve kisses curve at point in Venn diagram . In a rotation about there are 4 regions, which we may denote , , , and . Unless and are connected we can not have a Venn diagram since these regions are in the same set of interiors and exteriors of curves. We will show that they are not connected, a contradiction which will prove the observation. Because is a Venn diagram, curves and must have at least two transverse intersections, for otherwise one curve would be contained in the other. Define a closed curve by following curve with region on its boundary until first encountering a transverse intersection with , and then follow back to . The curve might have points of kissing, but no transverse intersections. To finish the proof, observe that contains region but excludes region , and thus they are not connected. The more general statement may be proven by essentially the same proof.      At most curves pass through any point of intersection in a -Venn diagram.    Since the curves are simple closed Jordan curves, they do not self-intersect, and thus pass through any point at most once.     The reason that Venn wanted his diagrams to have all non-empty is that he would shade any regions that were excluded from the syllogism under consideration. We can also regard these shaded Venn diagrams as representing a set system; that is, one of the sets of subsets of . If a region is not shaded, then the corresponding set of interiors is in the set system. We use set systems when comparing Venn and Euler diagrams in .  Finally, we note that the 3-circle diagram shown above, and the 2-circle diagram for 2 sets, appear often in the context of illustrating simple logical arguments. Readers interested in the applications of Venn diagrams to logical arguments are referred to the excellent introductory article by Glassner [Gl] , the book by Shin [Sh] , and many standard logic textbooks.   Families of Intersecting Simple Curves  It is sometimes convenient to consider wider families of curves when proving results about Venn diagrams, such as independent families. We define another such family below.   FISC  FISC simple  FISC convex  A family of simple curves (or a FISC ) is a collection of finitely-intersecting simple closed curves in the plane, with the property that there is some open region common to the interior of all the curves. A FISC is simple if at every point of intersection exactly two curves meet, and they cross each other transversally. A FISC is convex if each curve is convex.   Clearly, every independent family is a FISC, but not every Euler diagram.   "
},
{
  "id": "sec-defs-2",
  "level": "2",
  "url": "sec-defs.html#sec-defs-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "simple closed curves interior "
},
{
  "id": "def-IndependentFamily",
  "level": "2",
  "url": "sec-defs.html#def-IndependentFamily",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": " independent family   Let be a collection of simple closed curves drawn in the plane. The collection is said to be an independent family if the region formed by the intersection of is non-empty, where each is either or is . If, in addition, each such intersection region is connected and there are only finitely many points of intersection between curves, then C is a Venn diagram , or an -Venn diagram if we wish to emphasize the number of curves in the diagram.   "
},
{
  "id": "sec-defs-4",
  "level": "2",
  "url": "sec-defs.html#sec-defs-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "region connected "
},
{
  "id": "sec-defs-5",
  "level": "2",
  "url": "sec-defs.html#sec-defs-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Euler diagrams "
},
{
  "id": "fig-V3",
  "level": "2",
  "url": "sec-defs.html#fig-V3",
  "type": "Figure",
  "number": "2.1.2",
  "title": "",
  "body": " Regions labeled by inclusion.    "
},
{
  "id": "fig-V3-bitstring",
  "level": "2",
  "url": "sec-defs.html#fig-V3-bitstring",
  "type": "Figure",
  "number": "2.1.3",
  "title": "",
  "body": " Regions labeled by bitstrings.    "
},
{
  "id": "fig-CO-V3",
  "level": "2",
  "url": "sec-defs.html#fig-CO-V3",
  "type": "Figure",
  "number": "2.1.4",
  "title": "",
  "body": " Regions colored by size.    "
},
{
  "id": "obs-binomial",
  "level": "2",
  "url": "sec-defs.html#obs-binomial",
  "type": "Observation",
  "number": "2.1.5",
  "title": "",
  "body": "  For , the number of -regions in a Venn diagram is .   "
},
{
  "id": "fig-4-IF",
  "level": "2",
  "url": "sec-defs.html#fig-4-IF",
  "type": "Figure",
  "number": "2.1.6",
  "title": "",
  "body": " An independent family that is not a Venn diagram   "
},
{
  "id": "fig-4Venn_ellipses",
  "level": "2",
  "url": "sec-defs.html#fig-4Venn_ellipses",
  "type": "Figure",
  "number": "2.1.7",
  "title": "",
  "body": " A simple 4-Venn diagram.   "
},
{
  "id": "sec-defs-12",
  "level": "2",
  "url": "sec-defs.html#sec-defs-12",
  "type": "Definition",
  "number": "2.1.8",
  "title": "",
  "body": " Venn diagram simple   A simple Venn diagram is one in which no more than two curves intersect at a common point.   "
},
{
  "id": "sec-defs-15",
  "level": "2",
  "url": "sec-defs.html#sec-defs-15",
  "type": "Definition",
  "number": "2.1.9",
  "title": "",
  "body": " Suppose two curves intersect at a point . The curves can cross at , in which case we say that they intersect transversally . If they do not cross, then we say that they intersect non-transversally , or that they kiss . transversal intersection   "
},
{
  "id": "obs-transverse",
  "level": "2",
  "url": "sec-defs.html#obs-transverse",
  "type": "Observation",
  "number": "2.1.10",
  "title": "",
  "body": "  In a simple Venn diagram, at every point of intersection, the two curves meet transversally. I.e., the two curves cross and do not meerly kiss each other. More generally, at any point of intersection in a Venn diagram, there must be at least two curves that meet transversally.    Suppose that curve kisses curve at point in Venn diagram . In a rotation about there are 4 regions, which we may denote , , , and . Unless and are connected we can not have a Venn diagram since these regions are in the same set of interiors and exteriors of curves. We will show that they are not connected, a contradiction which will prove the observation. Because is a Venn diagram, curves and must have at least two transverse intersections, for otherwise one curve would be contained in the other. Define a closed curve by following curve with region on its boundary until first encountering a transverse intersection with , and then follow back to . The curve might have points of kissing, but no transverse intersections. To finish the proof, observe that contains region but excludes region , and thus they are not connected. The more general statement may be proven by essentially the same proof.   "
},
{
  "id": "obs-maxn",
  "level": "2",
  "url": "sec-defs.html#obs-maxn",
  "type": "Observation",
  "number": "2.1.11",
  "title": "",
  "body": "  At most curves pass through any point of intersection in a -Venn diagram.    Since the curves are simple closed Jordan curves, they do not self-intersect, and thus pass through any point at most once.   "
},
{
  "id": "sec-defs-20-3",
  "level": "2",
  "url": "sec-defs.html#sec-defs-20-3",
  "type": "Definition",
  "number": "2.1.12",
  "title": "",
  "body": " FISC  FISC simple  FISC convex  A family of simple curves (or a FISC ) is a collection of finitely-intersecting simple closed curves in the plane, with the property that there is some open region common to the interior of all the curves. A FISC is simple if at every point of intersection exactly two curves meet, and they cross each other transversally. A FISC is convex if each curve is convex.  "
},
{
  "id": "sec-VennExist",
  "level": "1",
  "url": "sec-VennExist.html",
  "type": "Section",
  "number": "2.2",
  "title": "Constructions of Venn Diagrams",
  "body": " Constructions of Venn Diagrams  In this section we first discuss how to nicely draw diagrams with two or three circles, and some connections of these diagrams with geometry and other areas. Then we discuss the two most well-known techniques for drawing Venn diagrams with any positive number of curves.   How to draw a 2 or 3 circle Venn diagram  Given a compass, it is easy to draw a nice looking two circle Venn diagram as follows. First draw a circle centered at some point . Now draw a second circle of equal radius whose center lies on the first circle. The new circle will pass through . The region of intersection has been given several names including vesica piscis and mandorla . vesica piscis mandorla In Latin vesica is bladder and piscis is fish , and mandorla is Italian for almond . This shape was known to the ancient Greeks, and found use in early Christian imagery.  To draw a three circle Venn diagram one can start with the drawing of a two circle diagram and then add a circle of equal radius and centered at one of the points of intersection of the two circles. Effectively, that is how the diagram of was produced. In this case the central region of intersection (the blue region of ) is known as a Reuleaux triangle . Reuleaux triangle It is an example of a curve of constant width, meaning that if the object is placed between two parallel tangential lines, then the lines are equidistant, no mater the orientation of the parallel lines. This property is why they are used in the design of drill bits for drilling rounded square holes; e.g., H.J. Watts' 1917 US patent 1,241,176. (There is a widespread misconception that the piston of Wankel engine is a Reuleaux triangle; they look similar but are not mathematically identical.)   Above we saw that Venn diagrams exist for , and it is easy to see (for example, by removing circles) that Venn diagrams exist for . Diagrams exist for all larger values of as well. There have been several general constructions published (see [Be] , [RRS] , [Mo] , [AC] , and [FGK] , for a sampling in chronological order); we explain two of them below. They both have the nice property that they produce simple diagrams and have easy to explain inductive constructions. In both cases, a new curve is added by drawing a new curve that follows an existing curve ; in one case, and in the other case .   Venn's Construction   Venn's construction, outlined in his original paper [Ve80] , is best explained by considering the figure to the right. Start with the 3 circle diagram. Curves are successively added, with the new curve tracing the one last added and dividing each existing region in two. In the figure they are added in the order blue (4), red (5), and green (6). It should be clear where the seventh curve would be drawn.      Edwards' \"Cogwheels\" Construction   Edwards 7-Venn construction.    Anthony Edwards [Ed89a] , [Ed89b] developed another general inductive construction that has several nice properties, including some symmetry. It is also best explained by means of an example; refer to the diagram in . For the diagram consists of two perpendicular lines. (Strictly speaking we have to join the endpoints of these lines to make them into simple closed curves.) For a circle is added, centered at the point of intersection of the lines. Successive curves will all be added that follow this circle, weaving back and forth along the circle, again dividing each region in two. For the blue, red, green and magenta curves are added, in that order.  These diagrams have very attractive bipartite colourings as can be seen below. If the region is interior to an odd number of curves, then it is colored blue; otherwise, it is white. The reason for calling these colourings \"bipartite\" is explained in Chapter , Graphs Associated with Venn Diagrams.     bipartite  Edwards Venn diagrams with bipartite coloring, .                              Topologically equivalent constructions had been discovered ealier than Edwards' cogwheels, but these do not have the same aesthetic appeal as Edwards' diagrams. For example, see the convex polygons of [Gr75] and [FGK] . Futher references are [PS] and [Hu] Also, Edwards' diagrams have an interesting \"phase-shifted\" variant that we will explore later and which are nicely explained in his book [Ed04] .     Venn Diagrams and Knots   link Every simple Venn diagram can be woven in to a link link A link is a finite collection of non-intersecting knots (where a knot is a closed, non-self-intersecting curve that is embedded in three dimensions. ; as one traverses any curve, the other curves alternately go over and under. The reader will find it an interesting exercise to prove that this is always possible for any collection of simple closed curves in the plane. For example, below we show the link that arises (after some smooth transformations in 3-space) from Venn's general construction for . This is clearly the same as the link that arises from Edwards' general construction for , although the constructions give different links for .    "
},
{
  "id": "sec-VennExist-3-2",
  "level": "2",
  "url": "sec-VennExist.html#sec-VennExist-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vesica piscis mandorla "
},
{
  "id": "sec-VennExist-3-3",
  "level": "2",
  "url": "sec-VennExist.html#sec-VennExist-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Reuleaux triangle "
},
{
  "id": "fig-Edwards7colored",
  "level": "2",
  "url": "sec-VennExist.html#fig-Edwards7colored",
  "type": "Figure",
  "number": "2.2.1",
  "title": "",
  "body": " Edwards 7-Venn construction.   "
},
{
  "id": "fig-EdwardsBipartite",
  "level": "2",
  "url": "sec-VennExist.html#fig-EdwardsBipartite",
  "type": "Figure",
  "number": "2.2.2",
  "title": "",
  "body": " bipartite  Edwards Venn diagrams with bipartite coloring, .                            "
},
{
  "id": "sec-VennExist-7-2",
  "level": "2",
  "url": "sec-VennExist.html#sec-VennExist-7-2",
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
  "body": " Borromean rings  Borromean Rings  The Borromean rings consists of three interlocking rings, with the property that if any one of them is removed, then all three separate. The name Borromean comes from the Borromeo family of Renaissance Italy, who used them as their family \"crest\". Below we show the Borromean rings. The shadow, a minimal projection of the rings, is the familiar 3-Venn diagram. By minimal projection of a knot or link onto the plane we simply mean a projection that has the least number of intersections.   Below are two other illustrations of the Borromean rings. The one on the left is not a minimal projection (and isn't a Venn diagram). On the right is a rendering that has a great deal of symmetry as an object in three dimensional space.      The top diagram is by Toby Orloff and Delle Maxwell, 1990. Copyright by The Geometry Center [GC] , University of Minnesota, used with permission. The left diagram of the second figure is courtesy of Robert Scharein and is from his wonderful KnotPlot Site [KP] .  There is an interesting article on the Borromean rings in the The Mathematical Intelligencer, Winter 1995, Vol 17, No. 1. (Should this go in references?)  There is another interesting historical context in which the rings arise. The diagram was found in picture-stones on Gotland, an island in the Baltic sea off the southeast coast of Sweden. These are dated around the ninth century and are thought to tell tales from the Norse myths. To the Norse people of Scandinavia, a drawing of the Borromean rings using triangles is known as Odin's triangle of the Walknot (or valknut -- the knot of the slain). The symbol was also carved on the bedposts used in their burials at sea.  For further information, particularly of a mathematical nature, about Borromean rings and their generalizations, see the web page [SJ] of Slavick Jablan.  "
},
{
  "id": "sec-Borromean-3",
  "level": "2",
  "url": "sec-Borromean.html#sec-Borromean-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "minimal "
},
{
  "id": "ch-VennWhatIs-6",
  "level": "1",
  "url": "ch-VennWhatIs-6.html",
  "type": "Section",
  "number": "2.4",
  "title": "Extra Diagrams",
  "body": " Extra Diagrams  This section is a placeholder for certain ancillary diagrams that are referred to in other sections in this chapter. The online reader is encouraged to simply ignore this section; in printed book form it might be useful.   A 4-Venn diagram drawn with ellipses. Image created by Stuart Anderson. It is noticable that there are two sets of two ellipses whose centers form rectangles that are congruent and rotated by 90 degrees relative to each other.      Tutte embedding  The Tutte embedding of the 4-Venn diagram. Created by Stuart Anderson.      "
},
{
  "id": "img-ellipses",
  "level": "2",
  "url": "ch-VennWhatIs-6.html#img-ellipses",
  "type": "Figure",
  "number": "2.4.1",
  "title": "",
  "body": " A 4-Venn diagram drawn with ellipses. Image created by Stuart Anderson. It is noticable that there are two sets of two ellipses whose centers form rectangles that are congruent and rotated by 90 degrees relative to each other.    "
},
{
  "id": "img-Tutte4",
  "level": "2",
  "url": "ch-VennWhatIs-6.html#img-Tutte4",
  "type": "Figure",
  "number": "2.4.2",
  "title": "",
  "body": " Tutte embedding  The Tutte embedding of the 4-Venn diagram. Created by Stuart Anderson.    "
},
{
  "id": "ch-VennGraphs-3",
  "level": "1",
  "url": "ch-VennGraphs-3.html",
  "type": "Section",
  "number": "3.1",
  "title": "The Planar Dual of a Venn Diagram",
  "body": " The Planar Dual of a Venn Diagram  An -Venn diagram may be regarded as a graph in two ways. The diagram itself can be thought of as an edge-colored plane A planar graph is one that can be embedded in the plane without crossing edges. A plane graph is a planar graph that has been embedded in the plane. graph  graph planar graph planar whose vertices correspond to intersections of curves, and whose edges correspond to the segments of curves between intersections. Edges are colored according to the curve to which they belong. Following Chilakamarri, Hamburger, and Pippert [CHP95] , we overload the term and call this graph the Venn diagram . In an unlabelled Venn diagram we ignore the edge labels. There is no loss of information in the unlabelled version of a Venn graph if the corresponding Venn diagram is simple , since each of the curves can be uniquely recovered. We will see examples later where this is not true of non-simple diagrams.  Let us count the number of vertices, edges, and faces in an -Venn diagram. As an example, the three circle Venn diagram has 8 faces (corresponding to the 8 possible interior\/exterior possibilities), 6 vertices (corresponding to the 6 intersections) and 12 edges. Recall Euler's formula relating the number of faces, edges, and vertices of a graph embedded in the plane. Euler formula Assuming that no three or more curves intersect at a common point (i.e., a simple Venn diagram), the graph is 4-regular and so we have . By definition the number of faces is . It thus follows that and for simple Venn diagrams. By the maximum vertex degree is    Venn dual  graph bipartite  graph hypercube With each Venn diagram, , we may associate another plane graph called the Venn dual , which is denoted , the planar dual of the Venn diagram. (Warning: Some authors use the term \"Venn graph\" to refer to the dual.) Its vertices are the connected open regions (faces) of . Two vertices are connected by an edge if they share a common boundary. By default the edges are colored (by the color of the corresponding edge in the Venn diagram). At times it is also useful to label the vertices with a length- bitstring consisting of 0s and 1s; if the curves are labelled 1 to then we set bit to 1 if the vertex is enclosed by curve , 0 otherwise. Labels of adjacent vertices differ in exactly one bit position as one curve in the Venn diagram is crossed by one edge in the Venn dual. For example, the Venn dual of the three circle Venn diagram is a planar embedding of the 3-cube, . Clearly, every -Venn dual is a planar spanning subgraph of the -cube, . If is a simple Venn diagram, then every face of is a quadrilateral, and thus is a maximal bipartite A bipartite graph is one in which the vertices can be partitioned into two sets and where every edge is incident with a vertex from and a vertex from . The -cube is bipartite, and thus so is the Venn dual. planar graph.   (a) A Venn diagram . (b) Venn graph as an edge labelled graph. (c) The Venn dual, a 3-cube, . The cyan vertices are identified.    Above we illustrate these definitions. The following subsection contains illustrations of some Venn duals.   A maximal planar spanning subgraph of that is not the dual of a Venn diagram.     The Venn Duals of Venn's Construction  Here are the Venn dual graphs of Venn's general construction for , but without coloured edges for the different curves. Rather, here the red edges indicate the Hamilton cycle that is used in extending to the next higher value of .   How, in general, do you go from the dual graph of a Venn diagram , together with a Hamilton cycle in , and get a new planar dual of a Venn diagram of the next higher order? We now explain this process. Note that is a simple closed curve with an interior and an exterior, and that the edges not in lie either in the interior or in the exterior.   We illustrate the discussion with the expansion of to using the image above. In the dual where the edges of are red, edges on the interior are black, and edges on the exterior are gold. We now discuss how to obtain the central dual in the image. This part of the discussion works in general for a simple -Venn diagram with a Hamilton cycle. Thus there are edges in , of which are red, are gold and are black.   Each (black) vertex of is split into two vertices, one green and one blue, in . The blue vertices are in the interior, the green vertices in the exterior. In this corresponds to splitting each region into 2 regions, one interior to and one exterior to .  Each black (interior) edge in remains a black edge in connecting the corresponding blue vertices.  Each gold (exterior) edge in becomes a gold edge in connecting the corresponding green vertices.  The remaining edges form two cycles, one of green vertices (and edges) and the other of blue vertices (and edges).   Note that the is indeed a Venn dual of a Venn diagram because all of the original curves are intact; they just enclose twice as many faces, half blue and half green. The curve defined by the thick black edges is the new curve and it has all the blue faces on it's interior, and all the green faces on its exterior.  To finish the construction we just need to show that there is a Hamilton cycle in . This will be formed by joining the green cycle and the blue cycle, using a flip of edges in a 4-cycle in . Any 4-cycle whose consecutive edges are green, black, blue, black will work; i.e., the flip removes the green and blue edges from their cycles and adds the two black edges to the cycle to give a Hamilton cycle. Such edges abound: any red edge in becomes such a cycle in . In Venn's construction, the chosen edge of is the leftmost red edge with orientation ; the resulting 4-cycle is shown with dashed lines on the right in the image.  prism Peter Winkler provides a similar discussion in [Wi,pg. 271] . The discussion above essentially proves one direction of and . Note that the blue, green, and thick black edges of the middle image are the prism of the red Hamilton cycle in the left image.    The directed dual  It is sometimes convenient to assign a direction to each edge of the Venn dual, where the direction indicates whether the endpoints of the edge are in the interior or the exterior of the curve.    The directed dual is the directed graph obtained from by assigning a direction to each of it's edges. Each edge is directed from the interior of the corresponding curve to it's exterior.    Thus the dual vertex corresponding to the interior of all the curves is a source (all edges are directed away from it), and the dual vertex corresponding to the exterior of all the curves (the unbounded outer region) is a sink (all edges are directed into it).    The directed dual contains no directed circuits.       For every FISC , there is a directed path in the directed dual graph from any vertex interior to all the curves to the unique dual vertex exterior to all the curves.    Let be a dual vertex interior to all the curves of and assume that not all dual vertices are reachable from via a directed path. Let be the set that are reachable. By our assumption is a cut where is non-empty. ETC, ETC.    "
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
  "id": "ch-VennGraphs-3-4",
  "level": "2",
  "url": "ch-VennGraphs-3.html#ch-VennGraphs-3-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Venn dual bipartite "
},
{
  "id": "ch-VennGraphs-3-5",
  "level": "2",
  "url": "ch-VennGraphs-3.html#ch-VennGraphs-3-5",
  "type": "Figure",
  "number": "3.1.1",
  "title": "",
  "body": " (a) A Venn diagram . (b) Venn graph as an edge labelled graph. (c) The Venn dual, a 3-cube, . The cyan vertices are identified.   "
},
{
  "id": "ch-VennGraphs-3-7",
  "level": "2",
  "url": "ch-VennGraphs-3.html#ch-VennGraphs-3-7",
  "type": "Figure",
  "number": "3.1.2",
  "title": "",
  "body": " A maximal planar spanning subgraph of that is not the dual of a Venn diagram.   "
},
{
  "id": "subsec-Duals-9",
  "level": "2",
  "url": "ch-VennGraphs-3.html#subsec-Duals-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "flip "
},
{
  "id": "sec-DirectedDual-3",
  "level": "2",
  "url": "ch-VennGraphs-3.html#sec-DirectedDual-3",
  "type": "Definition",
  "number": "3.1.1",
  "title": "",
  "body": "  The directed dual is the directed graph obtained from by assigning a direction to each of it's edges. Each edge is directed from the interior of the corresponding curve to it's exterior.   "
},
{
  "id": "sec-DirectedDual-4",
  "level": "2",
  "url": "ch-VennGraphs-3.html#sec-DirectedDual-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "source sink "
},
{
  "id": "sec-DirectedDual-5",
  "level": "2",
  "url": "ch-VennGraphs-3.html#sec-DirectedDual-5",
  "type": "Observation",
  "number": "3.1.2",
  "title": "",
  "body": "  The directed dual contains no directed circuits.   "
},
{
  "id": "thm-FISC_in_out",
  "level": "2",
  "url": "ch-VennGraphs-3.html#thm-FISC_in_out",
  "type": "Theorem",
  "number": "3.1.3",
  "title": "",
  "body": "  For every FISC , there is a directed path in the directed dual graph from any vertex interior to all the curves to the unique dual vertex exterior to all the curves.    Let be a dual vertex interior to all the curves of and assume that not all dual vertices are reachable from via a directed path. Let be the set that are reachable. By our assumption is a cut where is non-empty. ETC, ETC.   "
},
{
  "id": "ch-VennGraphs-4",
  "level": "1",
  "url": "ch-VennGraphs-4.html",
  "type": "Section",
  "number": "3.2",
  "title": "When are two Venn diagrams different?",
  "body": " When are two Venn diagrams different?  Answering this question is a bit subtle and depends on whether the diagrams is regarded as being embedded in the plane or on a sphere, whether the curves are coloured or not, and so on.   Venn diagram isomorphic   Two Venn diagrams are isomorphic if, by a continuous transformation of the plane, one of them can be changed into the other or its mirror image.     Venn diagram equivalent   Two Venn diagrams are equivalent if they are isomorphic as plane graphs, ignoring the edge colors (that is, isomorphic as planar graphs embedded in the plane).    Since curves meet transversally in simple Venn diagrams, two simple Venn diagrams are isomorphic if and only if they are equivalent.  On the other hand, a Venn diagram may be embedded on the surface of a sphere via stereographic projection. (Consider the standard basketball ball; it is the stereographic projection of a simple 3-Venn diagram; adding another great circle, orthogonal to the other two, gives Edwards' general construction for .) Sometimes it is more natural to look at Venn diagrams as being embedded on the sphere. This topic is explored in .   Venn diagram class of   Two Venn diagrams are in the same class if they can be projected to the same spherical Venn diagram.    When considering non-simple Venn diagrams there is another elementary operation that can sometimes be applied to one diagram to get another.   [rigid diagram, seperable vertex]  Venn diagram rigid  Venn diagram seperable vertex in   A vertex traversal of a vertex in a Venn diagram is a circular sequence of the curves adjacent to , when read in a clockwise rotation around . A vertex is said to be separable if its vertex traversal has the property that for some , there is a such that the intersection of and consists of one curve, say , and in addition, and . In the example below the sets and are = { red, green, black, red, green} and = {blue, yellow, black, blue, yellow}, and the black curve is the curve . A Venn diagram is said to be rigid if it has no separable vertices. The figures below illustrate the operation of splitting a separable vertex; unsplitting (or joining )is defined as the inverse operation.      A seperable vertex     Splitting that vertex     Note that the vertex of Figure is part of a Venn diagram if and only if the two vertices of Figure are part of a Venn diagram. Simple diagrams are in many ways the most visually pleasing of Venn diagrams. Rigid Venn diagrams are interesting because in the equivalence class of diagrams under splitting and unsplitting of vertices, they are the ones closest to being simple.    An extended example of vertex splitting.  To make a Venn diagram more simple, we wish to add vertices, which corresponds to adding faces (by adding edges) in the dual graph. Since any face in the Venn dual whose boundary contains more than four edges corresponds to a vertex of degree greater than four in the Venn diagram, adding a chord across that face corresponds to splitting the relevant vertex into two adjacent vertices in the Venn diagram - thus adding one extra vertex into the diagram and making it closer to being simple.    Consider the symmetric 5-venn diagram shown to the left. This diagram can be constructed using the necklace construction ideas on the page Symmetric Diagrams, Necklaces, and Chains ; it is very non-simple, but it is also not rigid. In this subsection, we show how to transform it into the unique simple diagram on 5 vertices, shown at the beginning of the section on symmetric diagrams . The vertex marked with a star is separable, and we will separate it.   Below we show the corresponding unlabelled Venn dual (the red edges) overlaying a monochromatic version of the diagram above, and then the dual graph alone on the right. In both graphs the external vertices, corresponding to the external empty region in the Venn diagram, are identified; we don't join them to emphasize the symmetry of the diagram.       To the right we show how the starred separable vertex above can be separated to create a new vertex - the green and black curves have now formed a new vertex where they intersect, which is the second star. (Note that the originally starred vertex remains separable.) The separation corresponds to adding the thin green edge in the Venn dual. The fact that this can be done without creating any new regions corresponds to the fact that the vertices in the Venn dual corresponding to the newly neighbouring faces can have an edge added between them ( i.e. , their labels differ by a single bit).    Below we show how this edge can be added symmetrically to create five new vertices in the diagram (on the left) and adding five new edges to the dual (on the right).      Continuing in this fashion, we add edges to the dual graph until no more can be added; at this point the Venn dual is composed entirely of 4-faces (faces with exactly 4 edges bordering them), implying that the corresponding Venn diagram is simple. Following [KRSW] , we can call this operation quadrangulation since each resulting face is a quadrangle. The final diagram is shown below; it is isomorphic to the unique simple symmetric 5-Venn diagram.       "
},
{
  "id": "def-isomorphic",
  "level": "2",
  "url": "ch-VennGraphs-4.html#def-isomorphic",
  "type": "Definition",
  "number": "3.2.1",
  "title": "",
  "body": " Venn diagram isomorphic   Two Venn diagrams are isomorphic if, by a continuous transformation of the plane, one of them can be changed into the other or its mirror image.   "
},
{
  "id": "def-equivalent",
  "level": "2",
  "url": "ch-VennGraphs-4.html#def-equivalent",
  "type": "Definition",
  "number": "3.2.2",
  "title": "",
  "body": " Venn diagram equivalent   Two Venn diagrams are equivalent if they are isomorphic as plane graphs, ignoring the edge colors (that is, isomorphic as planar graphs embedded in the plane).   "
},
{
  "id": "def-class",
  "level": "2",
  "url": "ch-VennGraphs-4.html#def-class",
  "type": "Definition",
  "number": "3.2.3",
  "title": "",
  "body": " Venn diagram class of   Two Venn diagrams are in the same class if they can be projected to the same spherical Venn diagram.   "
},
{
  "id": "ch-VennGraphs-4-9",
  "level": "2",
  "url": "ch-VennGraphs-4.html#ch-VennGraphs-4-9",
  "type": "Definition",
  "number": "3.2.4",
  "title": "[rigid diagram, seperable vertex].",
  "body": " [rigid diagram, seperable vertex]  Venn diagram rigid  Venn diagram seperable vertex in   A vertex traversal of a vertex in a Venn diagram is a circular sequence of the curves adjacent to , when read in a clockwise rotation around . A vertex is said to be separable if its vertex traversal has the property that for some , there is a such that the intersection of and consists of one curve, say , and in addition, and . In the example below the sets and are = { red, green, black, red, green} and = {blue, yellow, black, blue, yellow}, and the black curve is the curve . A Venn diagram is said to be rigid if it has no separable vertices. The figures below illustrate the operation of splitting a separable vertex; unsplitting (or joining )is defined as the inverse operation.   "
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
  "id": "sec-VertexSplitting-9",
  "level": "2",
  "url": "ch-VennGraphs-4.html#sec-VertexSplitting-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "quadrangulation "
},
{
  "id": "ch-VennGraphs-5",
  "level": "1",
  "url": "ch-VennGraphs-5.html",
  "type": "Section",
  "number": "3.3",
  "title": "How many are there?",
  "body": " How many are there?  The precise number of Venn diagrams and Venn classes has been determined by Chilakamarri, Hamburger and Pippert [CHP96b] , [HP97] , [CHP00] for , and for simple diagrams and classes if . Clearly, for there is only one diagram but, perhaps surprisingly, things get interesting for .   Diagrams with curves  For there are six distinct Venn classes and fourteen distinct Venn diagrams. Only one of the diagrams is simple (Class 6). We denote the diagrams as #3.1, #3.2, ..., #3.14 in order to refer to them later. Each class has two corresponding Figures  Class 1 (#3.1,#3.2): , .  Class 2 (#3.3,#3.4): , .  Class 3 (#3.5,#3.6): , .  Class 4 (#3.7,#3.8,#3.9,#3.10): , .  Class 5 (#3.11,#3.12,#3.13): , .  Class 6 (#3.14): , .     Note that classes 2 and 3 are equivalent but not isomorphic, as are diagrams #3.3 & #3.6 (and #3.4 & #3.5). Diagram #3.3 appears also in [ES] (showing that it is a convex ADD LINK diagram). The diagrams in Class 2 have the property that each pair of curves at a point of intersection meet transversally; the diagrams of Class 3 do not have this property. Aside from the simple diagram of Class 6, only Class 2 is rigid; the other classes are non-rigid.    Diagrams with curves  For there are two distinct simple Venn diagrams and one distinct simple Venn class (this was first observed by Grünbaum [Gr92a,p.8] and proven in [CHP96b] ). Drawings of these two are shown in Figures 4 (a) and (b) in [Gr92a,p.7] , and are redrawn here:     Diagrams with curves  For , there are 11 distinct, reducible, simple Venn classes and 12 distinct, reducible, simple Venn diagrams. Drawings of these may be found in [HP97] . There are 8 distinct simple, irreducible Venn classes ( [CHP00] ). Five of them have one convex drawing in the plane (and four of these were discovered by Grünbaum). All five can be drawn with five congruent ellipses. Thus, in total, there are 19 simple Venn classes for .  In proving these results several theorems of independent interest were proven:  graph 3-connected   A simple -Venn diagram for is 3-connected.    This was later extended by Pruesse and Ruskey ( [PR] ).  graph 4-connected   A simple -Venn diagram for is 4-connected.    A theorem of Whitney [Wh] states that a plane embedding of a 3-connected planar graph is unique, once the outer face has been identified. Thus, to determine whether two Venn diagrams are in the same class, we need only try all possible embeddings of one of them with each of its faces as the outer region and observe whether any of these embeddings is isomorphic to the other diagram.    A simple Venn dual for is 3-connected.      No two edges in a face of a Venn diagram belong to the same curve.      Diagrams with curves  The total number of Venn diagrams for is not known, but several partial results are known for restricted types of Venn diagrams. As part of his search for 6-Venn triangles, Carroll [Ca99] reports that there are 1833 non-isomorphic simple monotone 6-Venn diagrams with the additional property that there are no more than 6 crossings between any pair of curves. Mamakani, Myrvold and Ruskey ( [MMR11] , [MMR11] ) determined that there are 39,020 simple monotone Venn diagrams; of these, 375 are polar symmetric. One of those polar symmetric diagrams and its cylindrical representation are shown in . They also looked for other types of symmetry, and found it; these results are reported in the section on Spherical Venn diagrams.   Venn diagram polar symmetry  A simple monotone 6-Venn diagram and its cylindrical representation. The diagram is polar symmetric and the black dots show where the equatorial axis intersects the surface of the sphere. A flip by radians about that axis leaves the diagram fixed, up to a relabeling of the curves.      "
},
{
  "id": "ch-VennGraphs-5-5-4",
  "level": "2",
  "url": "ch-VennGraphs-5.html#ch-VennGraphs-5-5-4",
  "type": "Theorem",
  "number": "3.3.1",
  "title": "",
  "body": "graph 3-connected   A simple -Venn diagram for is 3-connected.   "
},
{
  "id": "ch-VennGraphs-5-5-6",
  "level": "2",
  "url": "ch-VennGraphs-5.html#ch-VennGraphs-5-5-6",
  "type": "Theorem",
  "number": "3.3.2",
  "title": "",
  "body": "graph 4-connected   A simple -Venn diagram for is 4-connected.   "
},
{
  "id": "ch-VennGraphs-5-5-8",
  "level": "2",
  "url": "ch-VennGraphs-5.html#ch-VennGraphs-5-5-8",
  "type": "Theorem",
  "number": "3.3.3",
  "title": "",
  "body": "  A simple Venn dual for is 3-connected.   "
},
{
  "id": "thm-NoTwoEdges",
  "level": "2",
  "url": "ch-VennGraphs-5.html#thm-NoTwoEdges",
  "type": "Theorem",
  "number": "3.3.4",
  "title": "",
  "body": "  No two edges in a face of a Venn diagram belong to the same curve.   "
},
{
  "id": "fig-SixVenn_00210",
  "level": "2",
  "url": "ch-VennGraphs-5.html#fig-SixVenn_00210",
  "type": "Figure",
  "number": "3.3.5",
  "title": "",
  "body": " Venn diagram polar symmetry  A simple monotone 6-Venn diagram and its cylindrical representation. The diagram is polar symmetric and the black dots show where the equatorial axis intersects the surface of the sphere. A flip by radians about that axis leaves the diagram fixed, up to a relabeling of the curves.    "
},
{
  "id": "ch-VennGraphs-6",
  "level": "1",
  "url": "ch-VennGraphs-6.html",
  "type": "Section",
  "number": "3.4",
  "title": "Extending Venn Diagrams",
  "body": " Extending Venn Diagrams  In this section we are concerned with trying to use an existing -Venn diagram to produce a Venn diagram with more than curves.   reducible Venn diagram   A -Venn diagram is reducible if the removal of one of its curves results in a Venn diagram with curves. A Venn diagram that is not reducible is irreducible .    The two general constructions, by their nature, both yield reducible diagrams. The symmetric ellipse diagram shown in is irreducible. Removing curve 4 results in an independent family in which the region corresponding to the set {1} is disconnected (the cyan shaded region of the figure). Since the diagram is symmetric, no matter what curve is removed, the result is not a Venn diagram.  For a long time it was not known whether a reducible Venn diagram whose curves are ellipses existed or not; such a diagram was discovered by Hamburger and Pippert [HP00] and is shown below. WHERE IS IT???   extendible Venn diagram   A -Venn diagram is extendible if there is a curve that can be added to it to make an -Venn diagram, . Diagram is said to be an extension of .    Winkler [Wi] makes the following two observations:    For , a simple -Venn diagram is extendible to a simple -Venn diagram if and only if its Venn dual is Hamiltonian.      If the -Venn diagram is an extension of an -Venn diagram, then is extendible to an -Venn diagram.    To prove the latter theorem, let B be the diagram whose extension is C . By , The curve added to to get corresponds to a Hamiltonian cycle in D( B ). In D( C ), curve becomes the prism The prism of a graph is formed by taking two copies of and adding a perfect matching whose edges join corresponding copies of vertices. , , of a cycle of length . Since the prism of a cycle is Hamiltonian, is extendible.  Edwards' general construction is a manifestation of this proof of , where the Hamilton cycle in is the one that alternates back and forth between the two copies of the cycle, two vertices at a time from each cycle. Venn's general construction is related but different since it uses only two prism edges (see ).   Winkler's Conjecture  Winkler [Wi] conjectured that every simple Venn diagram of curves can be extended to a simple Venn diagram of curves by the addition of a suitable curve. This conjecture was modified by Grünbaum [Gr92b] by removing the restriction of simplicity; i.e., his conjecture was that every Venn diagram is extendible. Grünbaum's version was proven by Chilakamarri, Hamburger, and Pippert [CHP96a] , but Winkler's original conjecture remains unsettled.   Extending a Venn diagram by using the radual graph.         (a) Venn #3.4. (b) The dual. (c) Radual graph.       (d) Hamilton cycle. (e) Extended diagram.      The proof of [CHP96a] introduces the radual graph , of the Venn diagram, which, for an arbitrary plane graph, is the union of the radial graph and the dual graph (Ore [Or] has more information on the radial and dual graphs). A simple example, using Venn diagram #3.4, is shown in Figure . In that figure, the dual graph is shown in (b) with magenta edges. The vertex set of the radial graph is the union of the vertex sets of the primal graph and its dual, and the edge set consist of all possible edges that join a dual vertex with an incident vertex of its face; these are the black edges in (c). Observe that the radual graph of a connected plane graph is a triangulation (every face is a triangle). The strategy of their proof is first to show that is a simple triangulation without separating triangles and then invoke a theorem of Whitney [Wh] that any such graph is Hamiltonian. Such a Hamilton cycle is shown in (d). It is then easy to see that the Hamilton cycle in the radual graph can be used as the additional curve; see (e). This sufficient condition is also necessary as stated in this analogue of .    For , a -Venn diagram is extendible to a -Venn diagram if and only if its radual graph is Hamiltonian.     "
},
{
  "id": "ch-VennGraphs-6-3",
  "level": "2",
  "url": "ch-VennGraphs-6.html#ch-VennGraphs-6-3",
  "type": "Definition",
  "number": "3.4.1",
  "title": "",
  "body": " reducible Venn diagram   A -Venn diagram is reducible if the removal of one of its curves results in a Venn diagram with curves. A Venn diagram that is not reducible is irreducible .   "
},
{
  "id": "ch-VennGraphs-6-6",
  "level": "2",
  "url": "ch-VennGraphs-6.html#ch-VennGraphs-6-6",
  "type": "Definition",
  "number": "3.4.2",
  "title": "",
  "body": " extendible Venn diagram   A -Venn diagram is extendible if there is a curve that can be added to it to make an -Venn diagram, . Diagram is said to be an extension of .   "
},
{
  "id": "thm-A",
  "level": "2",
  "url": "ch-VennGraphs-6.html#thm-A",
  "type": "Theorem",
  "number": "3.4.3",
  "title": "",
  "body": "  For , a simple -Venn diagram is extendible to a simple -Venn diagram if and only if its Venn dual is Hamiltonian.   "
},
{
  "id": "thm-B",
  "level": "2",
  "url": "ch-VennGraphs-6.html#thm-B",
  "type": "Theorem",
  "number": "3.4.4",
  "title": "",
  "body": "  If the -Venn diagram is an extension of an -Venn diagram, then is extendible to an -Venn diagram.   "
},
{
  "id": "fig-radual",
  "level": "2",
  "url": "ch-VennGraphs-6.html#fig-radual",
  "type": "Figure",
  "number": "3.4.5",
  "title": "",
  "body": " Extending a Venn diagram by using the radual graph.         (a) Venn #3.4. (b) The dual. (c) Radual graph.       (d) Hamilton cycle. (e) Extended diagram.     "
},
{
  "id": "ch-VennGraphs-6-12-4",
  "level": "2",
  "url": "ch-VennGraphs-6.html#ch-VennGraphs-6-12-4",
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
  "number": "3.4.6",
  "title": "",
  "body": "  For , a -Venn diagram is extendible to a -Venn diagram if and only if its radual graph is Hamiltonian.   "
},
{
  "id": "minimum",
  "level": "1",
  "url": "minimum.html",
  "type": "Section",
  "number": "3.5",
  "title": "Minimum Venn diagrams",
  "body": " Minimum Venn diagrams   In a simple Venn diagram the number of vertices is exactly . For non-simple Venn diagrams this number can be reduced, but a lower bound of is readily derived from Euler's relation and the fact that at most curves can intersect at a point. Diagrams achieving this lower bound are known for , and are said to be minimum . Venn diagram minimum For diagrams #3.1 and #3.2 achieve this lower bound. These are the Venn diagrams of Class 1 (see ). For the diagram shown here (discovered in collaboration with Peter Hamburger) achieves the lower bound. WHAT ABOUT ???? See and for an example when (from [BR] ), and , , and for examples when examples for (discovered in collaboration with Stirling Chow).     monotone   A Venn diagram is monotone if, for , every -region is adjacent to both a -region and a -region.     monotone The general construction of Edwards is monotone; the general construction of Venn is not. Examples of monotone and non-monotone Venn diagrams may be found on the , about symmetric Venn diagrams. The 3-Venn diagrams #3.12 and #3.13, shown in , both in the same class, show that monotonicity is a property of Venn diagrams and not Venn classes, since #3.12 is monotone and #3.13 is not. In a monotone Venn diagram the -regions, for any , form a cycle , in the sense that every -region touches exactly two others, and they are connected together in a cycle under this relation [BR] .   monotone  Hasse diagram  hypercube  Boolean lattice  source  sink We can view monotonicity in another order-theoretic way. The Venn dual graph, , defined above, could have been defined as a directed acyclic graph, with the direction indicating whether one vertex is a subset of another. Let's call this the directed Venn dual graph . The directed Venn dual is a spanning subgraph of the Hasse diagram (regarded as a directed graph) of the Boolean lattice. As shown in [BGR] , a Venn diagram is monotone if and only if the directed Venn dual graph has a unique maximum element (a sink) and a unique minimum element (a source).  Bultena and Ruskey [BR] determined , the least number of vertices in a monotone -Venn diagram.    For all ,     As part of their proof they gave an inductive construction to show that monotone Venn diagrams that achieve this bound exist for all . TIE IN WITH CHRISTMAS TREE PATTERN??? A constructive proof with a different motivation is given in [GKS] for the case where is a prime number.  crossing sequence  MONOTONE VENN DIAGRAMS CAN BE REPRESENTED WITH A CROSSING SEQUENCE...   "
},
{
  "id": "minimum-2-1",
  "level": "2",
  "url": "minimum.html#minimum-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "minimum "
},
{
  "id": "def-monotone",
  "level": "2",
  "url": "minimum.html#def-monotone",
  "type": "Definition",
  "number": "3.5.1",
  "title": "",
  "body": " monotone   A Venn diagram is monotone if, for , every -region is adjacent to both a -region and a -region.   "
},
{
  "id": "minimum-5",
  "level": "2",
  "url": "minimum.html#minimum-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "directed Venn dual graph "
},
{
  "id": "thm-MinVertMonotone",
  "level": "2",
  "url": "minimum.html#thm-MinVertMonotone",
  "type": "Theorem",
  "number": "3.5.2",
  "title": "",
  "body": "  For all ,    "
},
{
  "id": "ch-VennGraphs-8",
  "level": "1",
  "url": "ch-VennGraphs-8.html",
  "type": "Section",
  "number": "3.6",
  "title": "Venn diagrams made from congruent curves",
  "body": " Venn diagrams made from congruent curves   The first part of this section is more \"geometric\" than \"graph theoretic\". We introduce congruent Venn diagrams here because the examples are used to illustrate graph theoretic definitions.    congruent  Congruent Venn Diagrams  The general constructions of Venn and Edwards outlined on the \"What is a Venn Diagram?\" page do not share a nice property of the first two figures on the same page (made from circles and triangles), namely, that they are constructed from congruent Two figures in the plane are congruent if one can be transformed into the other by rotations and translations in the plane. curves. Grünbaum [Gr92b] defines a Venn diagram to be nice if it is made from congruent curves, but we'll prefer to call them congruent Venn diagrams. The first such diagrams were constructed by Grünbaum in the seminal paper [ Gr75 ]. In [Gr92b] he discussed examples of congruent diagrams for up to 8 curves; many symmetric examples can be found in the .   Hamburger and Pippert [HP97] proved that there are simple reducible Venn diagrams with 5 congruent ellipses, in spite of the fact that Venn had stated that there are no such diagrams. In fact, there are two of them, but they are in the same class: one of their diagrams is shown to to the right.  Below we show a redrawing of Grünbaum's beautiful congruent Venn diagram (from [Gr75] ) made from 5 congruent ellipses which also has a rotational symmetry. The diagram on the left labels each region with the labels of all ellipses that contain the region. On the right, the regions are colored according to the number of ellipses in which they are contained: white (the external region) = 0, yellow = 1, red = 2, blue = 3, green = 4, and black = 5. Note that the number of regions colored with a given color corresponds to the appropriate binomial coefficient: #(white) = #(black) = 1, #(yellow) = #(green) = 5, and #(red) = #(blue) = 10.               Venn diagrams and \"Revolving Door\" lists  Note that some of the blue regions in the ellipse diagram above are \"adjacent\" in the sense that their boundary shares a common point. The sets corresponding to these regions differ by one element. The point of intersection acts like a \"revolving door\"; one element is removed from the subset, another element is added. Sometimes these adjacent regions form a \"cycle\", as in the diagram above. Another way of looking at the cycle is as the subgraph of the square The square of a graph , denoted , is the graph obtained by adding to the edge set of edges between vertices that are at distance 2 in , , of the Venn dual induced by those vertices corresponding to -subsets. These cycles give us revolving door listings of all the k -subsets of . Revolving door algorithms for listing various classes of -subsets have been developed by a variety of researchers [NW] , [Kn] . Below we list the subsets corresponding to the 1,2,3,4-subsets (yellow, red, blue, green) in the above diagram in a counter-clockwise rotation.       Because of the symmetry of the diagram, these circular listings have the property that they remain invariant when acted on by the cyclic permutation . These listings are related to combinatorial Gray codes; since Gray codes have many connections with symmetric diagrams we describe them further on the Variants on Symmetry page, .   "
},
{
  "id": "ch-VennGraphs-8-3-3",
  "level": "2",
  "url": "ch-VennGraphs-8.html#ch-VennGraphs-8-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "congruent nice congruent "
},
{
  "id": "fig-5ellipse",
  "level": "2",
  "url": "ch-VennGraphs-8.html#fig-5ellipse",
  "type": "Figure",
  "number": "3.6.1",
  "title": "",
  "body": "  "
},
{
  "id": "fig-5ellipse-coloured",
  "level": "2",
  "url": "ch-VennGraphs-8.html#fig-5ellipse-coloured",
  "type": "Figure",
  "number": "3.6.2",
  "title": "",
  "body": "  "
},
{
  "id": "fig-5ellipse-irreducible",
  "level": "2",
  "url": "ch-VennGraphs-8.html#fig-5ellipse-irreducible",
  "type": "Figure",
  "number": "3.6.3",
  "title": "",
  "body": "  "
},
{
  "id": "ch-VennGraphs-8-4-2",
  "level": "2",
  "url": "ch-VennGraphs-8.html#ch-VennGraphs-8-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "square "
},
{
  "id": "ch-VennGraphs-9",
  "level": "1",
  "url": "ch-VennGraphs-9.html",
  "type": "Section",
  "number": "3.7",
  "title": "Extra Diagrams",
  "body": " Extra Diagrams  This section is a placeholder for certain ancillary diagrams that are referred to in other sections in this chapter. The online reader is encouraged to simply ignore this section; in printed book form it might be useful.   The six Venn classes    The two 3-Venn diagrams (#3.1,#3.2) in Class 1.      The two 3-Venn diagrams (#3.1,#3.2) in Class 1 with regions coloured.        The two 3-Venn diagrams (#3.3,#3.4) in Class 2.      The two 3-Venn diagrams (#3.3,#3.4) in Class 2 with regions coloured.        The two 3-Venn diagrams (#3.5,#3.6) in Class 3.      The two 3-Venn diagrams (#3.5,#3.6) in Class 3 with regions coloured.        The four 3-Venn diagrams (#3.7,#3.8,#3.9,#3.10) in Class 4.      The four 3-Venn diagrams (#3.7,#3.8,#3.9,#3.10) in Class 4 with regions coloured.        The three 3-Venn diagrams (#3.11,#3.12,#3.13) in Class 5.      The three 3-Venn diagrams (#3.11,#3.12,#3.13) in Class 5 with regions coloured.      There is only one Venn diagram in class 6, the three circle Venn diagram: , with regions coloured,      Minimum Venn diagram for curves This diagram has 8 vertices. It was discovered by Bette Bultena.   A minimum 5-Venn diagram.     A minimum 5-Venn diagram, with regions coloured by size.       Minimum Venn diagram for curves These diagrams have 21 vertices, and are rotationally symmetric. The first two are polar symmetric, and the second two are symmetric, but not polar symmetric. From [CR98] .   A minimum 7-Venn diagram.     A minimum 7-Venn diagram, with regions coloured by size.       A minimum 7-Venn diagram. One curve is coloured green.     A minimum 7-Venn diagram.      "
},
{
  "id": "img-Class1",
  "level": "2",
  "url": "ch-VennGraphs-9.html#img-Class1",
  "type": "Figure",
  "number": "3.7.1",
  "title": "",
  "body": " The two 3-Venn diagrams (#3.1,#3.2) in Class 1.    "
},
{
  "id": "img-CO-Class1",
  "level": "2",
  "url": "ch-VennGraphs-9.html#img-CO-Class1",
  "type": "Figure",
  "number": "3.7.2",
  "title": "",
  "body": " The two 3-Venn diagrams (#3.1,#3.2) in Class 1 with regions coloured.    "
},
{
  "id": "img-Class2",
  "level": "2",
  "url": "ch-VennGraphs-9.html#img-Class2",
  "type": "Figure",
  "number": "3.7.3",
  "title": "",
  "body": " The two 3-Venn diagrams (#3.3,#3.4) in Class 2.    "
},
{
  "id": "img-CO-Class2",
  "level": "2",
  "url": "ch-VennGraphs-9.html#img-CO-Class2",
  "type": "Figure",
  "number": "3.7.4",
  "title": "",
  "body": " The two 3-Venn diagrams (#3.3,#3.4) in Class 2 with regions coloured.    "
},
{
  "id": "img-Class3",
  "level": "2",
  "url": "ch-VennGraphs-9.html#img-Class3",
  "type": "Figure",
  "number": "3.7.5",
  "title": "",
  "body": " The two 3-Venn diagrams (#3.5,#3.6) in Class 3.    "
},
{
  "id": "img-CO-Class3",
  "level": "2",
  "url": "ch-VennGraphs-9.html#img-CO-Class3",
  "type": "Figure",
  "number": "3.7.6",
  "title": "",
  "body": " The two 3-Venn diagrams (#3.5,#3.6) in Class 3 with regions coloured.    "
},
{
  "id": "img-Class4",
  "level": "2",
  "url": "ch-VennGraphs-9.html#img-Class4",
  "type": "Figure",
  "number": "3.7.7",
  "title": "",
  "body": " The four 3-Venn diagrams (#3.7,#3.8,#3.9,#3.10) in Class 4.    "
},
{
  "id": "img-CO-Class4",
  "level": "2",
  "url": "ch-VennGraphs-9.html#img-CO-Class4",
  "type": "Figure",
  "number": "3.7.8",
  "title": "",
  "body": " The four 3-Venn diagrams (#3.7,#3.8,#3.9,#3.10) in Class 4 with regions coloured.    "
},
{
  "id": "img-Class5",
  "level": "2",
  "url": "ch-VennGraphs-9.html#img-Class5",
  "type": "Figure",
  "number": "3.7.9",
  "title": "",
  "body": " The three 3-Venn diagrams (#3.11,#3.12,#3.13) in Class 5.    "
},
{
  "id": "img-CO-Class5",
  "level": "2",
  "url": "ch-VennGraphs-9.html#img-CO-Class5",
  "type": "Figure",
  "number": "3.7.10",
  "title": "",
  "body": " The three 3-Venn diagrams (#3.11,#3.12,#3.13) in Class 5 with regions coloured.    "
},
{
  "id": "img-min5",
  "level": "2",
  "url": "ch-VennGraphs-9.html#img-min5",
  "type": "Figure",
  "number": "3.7.11",
  "title": "",
  "body": " A minimum 5-Venn diagram.   "
},
{
  "id": "img-min5c",
  "level": "2",
  "url": "ch-VennGraphs-9.html#img-min5c",
  "type": "Figure",
  "number": "3.7.12",
  "title": "",
  "body": " A minimum 5-Venn diagram, with regions coloured by size.   "
},
{
  "id": "img-min7a",
  "level": "2",
  "url": "ch-VennGraphs-9.html#img-min7a",
  "type": "Figure",
  "number": "3.7.13",
  "title": "",
  "body": " A minimum 7-Venn diagram.   "
},
{
  "id": "img-min7aC",
  "level": "2",
  "url": "ch-VennGraphs-9.html#img-min7aC",
  "type": "Figure",
  "number": "3.7.14",
  "title": "",
  "body": " A minimum 7-Venn diagram, with regions coloured by size.   "
},
{
  "id": "img-min7b",
  "level": "2",
  "url": "ch-VennGraphs-9.html#img-min7b",
  "type": "Figure",
  "number": "3.7.15",
  "title": "",
  "body": " A minimum 7-Venn diagram. One curve is coloured green.   "
},
{
  "id": "img-min7bC",
  "level": "2",
  "url": "ch-VennGraphs-9.html#img-min7bC",
  "type": "Figure",
  "number": "3.7.16",
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
  "body": " Rotational Symmetry    Here we (re-)show a Venn diagram made from 5 congruent ellipses. The regions are colored according to the number of ellipses in which they are contained: white (the external region) = 0, yellow = 1, red = 2, blue = 3, green = 4, and black = 5. Note that the number of regions colored with a given color corresponds to the appropriate binomial coefficient: #(white) = #(black) = 1, #(yellow) = #(green) = 5, and #(red) = #(blue) = 10.   This diagram has a very a pleasing symmetry, namely an -fold rotational symmetry, where . Such a diagram is said to be symmetric . This simply means that there is a point about which the diagram may be rotated by radians and remain invariant, for . Note that any symmetric Venn diagram must be made from congruent curves. Alternatively, we could have defined a symmetric diagram in terms of multiple copies of a curve, rotated times, by radians, each time about a central point .  The purpose of this section is to survey what is known about symmetric diagrams. Henderson first discussed the topic in his early paper [He] , and he proved a simple necessary condition for the existence of symmetric Venn diagrams of curves.   A necessary condition for the existence of a symmetric -Venn diagram is that be a prime number.   To understand why the theorem is true, imagine the diagram to be split evenly into sectors (pieces of pie). The different connected regions representing the -subsets must be evenly distributed in each of the sectors. It thus follows that divides for each . This divisibility restriction implies that must be prime, via a theorem of Leibnitz. Wagon and Webb pointed out some subtle aspects necessary to make this proof correct in [WW] .  There is one other symmetry that we will consider for diagrams drawn in the plane. A symmetric Venn diagram has polar symmetry if it is invariant under \"polar flips\". Venn diagram polar symmetry Think of the diagram as being projected stereographically onto a sphere with the axis orthogonal to the plane running through the point of symmetry, and then project the diagram back onto the plane from the antipodal point on the axis. If the corresponding Venn dual graphs are isomorphic as plane graphs, then the diagram has polar symmetry. The symmetric Venn diagram shown above has polar symmetry, although it is perhaps not readily apparent.  Many symmetric diagrams are known for , and a few beautifully complex examples for . These diagrams, along with counting results establishing the number of symmetric diagrams with different properties, can all be seen in the following sections.   Reflective Symmetry  Besides rotational and polar symmetry, there is another symmetry that is natural to consider, reflective symmetry . We have already seen several diagrams with reflective symmetry. For 3-Venn diagrams there are the two in Class 2 ( ), the two in Class 3 ( ), and two of the three diagrams in Class 5 ( , #3.11, #3.13), and the simple three circle Venn diagram. For 4-Venn diagrams, the congruent ellipse diagram of has reflective symmetry; as does the very nice non-monotone example shown below in . For , we do not know any examples of diagrams with reflective symmetry.   A simple non-monotone 4-Venn diagram with reflective symmetry. .    "
},
{
  "id": "ch-VennSymmetric-3-3",
  "level": "2",
  "url": "ch-VennSymmetric-3.html#ch-VennSymmetric-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "symmetric "
},
{
  "id": "thm-Henderson",
  "level": "2",
  "url": "ch-VennSymmetric-3.html#thm-Henderson",
  "type": "Theorem",
  "number": "4.1.1",
  "title": "",
  "body": " A necessary condition for the existence of a symmetric -Venn diagram is that be a prime number.  "
},
{
  "id": "ch-VennSymmetric-3-7",
  "level": "2",
  "url": "ch-VennSymmetric-3.html#ch-VennSymmetric-3-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "polar symmetry "
},
{
  "id": "ch-VennSymmetric-3-9-2",
  "level": "2",
  "url": "ch-VennSymmetric-3.html#ch-VennSymmetric-3-9-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "reflective symmetry "
},
{
  "id": "fig-4Venn-nonmonotone",
  "level": "2",
  "url": "ch-VennSymmetric-3.html#fig-4Venn-nonmonotone",
  "type": "Figure",
  "number": "4.1.2",
  "title": "",
  "body": " A simple non-monotone 4-Venn diagram with reflective symmetry. .  "
},
{
  "id": "ch-VennSymmetric-4",
  "level": "1",
  "url": "ch-VennSymmetric-4.html",
  "type": "Section",
  "number": "4.2",
  "title": "Symmetric Diagrams for <span class=\"process-math\">\\(n = 2,3,5\\)<\/span>",
  "body": " Symmetric Diagrams for   In this section we show many examples of symmetric Venn diagrams for specific small values of , mainly . For , there is only one Venn diagram and it can be drawn to be polar symmetric. For , there are two symmetric diagrams. The classic three circle diagram is monotone, simple, and has polar symmetry. Diagram #3.1 (shown in ) is also a monotone polar symmetric diagram, but it is not simple, nor is it rigid.    Symmetric diagrams with curves    The simple ellipse diagram shown to the left is from [Gr75] , and has a 5-fold rotational symmetry. It is the only simple symmetric Venn diagram for n =5; in the list below, there are several different renderings of it:    Rick Mabry observes that the link of five knots formed by weaving the Venn diagram shown above is a Brunnian link --- the removal of any knot causes the link to fall apart. Mabry has created a beautiful rendering of the link made from \"ice cream cone curves\", see .  A version created by the author can be see in ; this diagram serves as an illustration of a symmetric Brunnian link link A link is a finite collection of non-intersecting knots (where a knot is a closed, non-self-intersecting curve that is embedded in three dimensions; the trivial knot is a simple loop). A Brunnian link is a link which is non-trivial, yet every proper sub-collection is trivial. A trivial link is one that can be projected to a collection of non-intersecting circles in the plane. of order 5. (The usual depiction of the Borromean rings (see ) is a symmetric Brunnian link of order 3.) This Brunnian link is attributed to C. van de Walle by Stewart [St, pg. 106] .  A rendering of the diagram using 5 equilateral triangles is given by Grünbaum in [Gr92b] and redrawn here: .  Stuart Anderson provided us with the labelled Tutte embedding of the diagram; one curve is highlighted, see .    There are many non-simple symmetric diagrams for . The one shown here is a play on the result that Venn diagrams cannot be constructed from \"curves that are\" circles for ; a statement that is no longer true if the three words in quotation marks are removed.    We have done an exhaustive computer search of all symmetric Venn diagrams for (first reported in the 1997 version of this survey). The number of symmetric Venn diagrams for is 243, and the table below shows the number possessing particular attributes. It is a often a trivial matter to construct non-simple diagrams from simple ones by \"pinching together\" simple intersections, but this operation does not produce an essentially different diagram. Thus we are particularly interested in rigid diagrams, of which there are .   Classification of symmetric 5-Venn diagrams    Polar  Rigid  Monotone  Count    No  No  No  100    No  No  Yes  89    No  Yes  No  12    No  Yes  Yes  13    Yes  No  No  5    Yes  No  Yes  18    Yes  Yes  No  2    Yes  Yes  Yes  4     For , a symmetric minimum Venn diagram must have at least 10 vertices. There are exactly six symmetric rigid 5-Venn diagrams with 10 vertices. One of them is shown below. Three others may be seen in , , and .   The following table shows the number of symmetric diagrams classified according to the number of vertices and rigidity.   Counts of symmetric 5-Venn diagrams    vertices  10  15  20  25  30    total  72  111  49  10  1    rigid  6  12  12  0  1      "
},
{
  "id": "tbl-5vennClassification",
  "level": "2",
  "url": "ch-VennSymmetric-4.html#tbl-5vennClassification",
  "type": "Table",
  "number": "4.2.1",
  "title": "Classification of symmetric 5-Venn diagrams",
  "body": " Classification of symmetric 5-Venn diagrams    Polar  Rigid  Monotone  Count    No  No  No  100    No  No  Yes  89    No  Yes  No  12    No  Yes  Yes  13    Yes  No  No  5    Yes  No  Yes  18    Yes  Yes  No  2    Yes  Yes  Yes  4    "
},
{
  "id": "tbl-4vennCounts",
  "level": "2",
  "url": "ch-VennSymmetric-4.html#tbl-4vennCounts",
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
  "title": "Symmetric diagrams with <span class=\"process-math\">\\(n = 7\\)<\/span> curves",
  "body": " Symmetric diagrams with curves    Referring to the case , Grünbaum [Gr75,p.19] wrote: \"at present it seems likely that no such diagram exists.\" However, Grünbaum himself later found examples of such diagrams [Gr92b] and in 1992 additional examples were also discovered by Anthony Edwards and independently by Carla Savage and Peter Winkler. In this section we summarize what is known about symmetric 7-Venn diagrams. They can be classified in various ways depending on whether they are monotone or non-monotone, and simple or non-simple, and we will have a sub-section on each of those 4 possibilities.    The Grünbaum encoding  The Grünbaum encoding of a simple symmetric -Venn diagram consists of four -ary strings, call them , , , , each of length . String is obtained by first numbering the curves clockwise as they appear on the outer face, and then following curve , also in a clockwise direction, recording its intersections with each of the other curves. The other strings are obtained by going counter-clockwise and\/or starting with one of the innermost curves; in each case the curves must be re-numbered first so the direction of traversing the curve is the same as the direction of numbering the curves on the outer\/inner face. Thus each string starts with a 1 . For the 3 circle diagram . For the 5 ellipse diagram at the top of this page, the strings of the Grünbaum encoding are   Of course, we really only need two of the strings, one starting at the inside and one at the outside, since can be inferred from , and from -- but it's convenient to have all four, particularly when checking a diagram by hand. How can be obtained from in general? Think of the strings as being indexed . The rule is .  In fact, only one string is required, since string is a circular rotation of . The starting position of can be determined as the unique position in where all curves have been encountered an odd number of times (thus implying that we're on the inside of all curves). In the 5 ellipse example, the starting position of is the rightmost 1 in . If a single string is chosen to be the representative, then we take the lexicographically least of all four.  This encoding scheme has its parallels in other disciplines: topologists may recognise the Grünbaum encoding as being closely related to the Gauss code of a knot 10 .   Tao Cao proved in [Ca] that for simple symmetric monotone Venn diagrams, the Grünbaum encoding uniquely identifies the diagram (up to isomorphism of plane graphs).    Simple Symmetric 7-Venn Diagrams   Simple monotone polar symmetric 7-Venn diagrams  For , all simple monotone symmetric Venn diagrams with polar symmetry are known; there are six of them, and they are listed below. The first five were discovered by Anthony Edwards using a program to generate candidate diagrams and manual checking to eliminate those candidates that were not Venn diagrams [Ed96] ; however one, Hamilton, was first found constructed by hand by Edwards. He named them after the cities in which they were discovered and we follow his naming convention (but also number them P1-P6). Grünbaum [Gr92b] also discovered \"Adelaide\". An exhaustive computer search by Frank Ruskey uncovered another, \"Victoria\", that had been overlooked in Edwards' manual checking.   Adelaide (P1):   Black-and-white Adelaide, .  One curve coloured green, .  Rainbow coloured regions, .  Symmetrically coloured regions, .  A cylindrical representation, .  Edwards' rendering, .  Tutte embedding, .  Tutte embedding (one curve colored), .  A link rendering, .    Hamilton (P2):   Black-and-white Hamilton, .  One curve coloured green, .  Rainbow coloured regions, .  Tutte embedding, .  Tutte embedding (one curve colored), .  A link rendering, .    Massey (P3):   Black-and-white Massey, .  One curve coloured green, .  Rainbow coloured regions, .  Tutte embedding, .  Tutte embedding (one curve colored), .  A link rendering, .    Victoria (P4):   Black-and-white Victoria, .  One curve coloured green, .  Rainbow coloured regions, .  Tutte embedding, .  Tutte embedding (one curve colored), .  A link rendering, .    Palmerston (P5):   Black-and-white Palmerston, .  One curve coloured green, .  Rainbow coloured regions, .  Tutte embedding, .  Tutte embedding (one curve colored), .  A link rendering, .    Manawatu (P6):   Black-and-white Manawatu, .  One curve coloured green, .  Rainbow coloured regions, .  Tutte embedding, .  Tutte embedding (one curve colored), .  A link rendering, .        The polar symmetric simple 7-Venn diagrams         Adelaide Hamilton Manawatu         Massey Palmerston Victoria      Below is a list of the lexicographically least of the 4 Grünbaum encoding strings for each of the 6 polar symmetric 7-Venn diagrams. The P numbers is the numbering used in [RW97] .   Grünbaum encodings of the six polar symmetric 7-Venn diagrams.    Adelaide P1  x = 1 4 6 3 6 4 2 5 3 1 4 1 3 6 1 6 2 5 3 6 3 5 1 6 4 3 1 6 2 4 1 4 2 5 1 6     Hamilton P2  x = 1 5 4 3 2 6 1 6 4 5 2 5 4 6 1 5 6 3 6 5 1 6 2 1 4 1 2 6 1 3 2 5 2 3 1 6     Massey P3  w = 1 5 6 3 2 5 3 1 3 4 6 4 2 5 4 1 2 6 1 6 4 6 3 6 2 6 3 4 1 5 1 4 1 3 1 6     Victoria P4  x = 1 4 2 5 3 6 1 6 3 5 3 6 2 5 1 6 1 5 3 6 2 5 1 4 2 6 1 6 2 5 1 4 2 4 1 6     Palmerston P5  w = 1 4 3 4 5 2 3 4 3 6 1 6 4 2 4 5 3 6 3 5 1 6 3 4 1 6 2 4 1 4 2 3 5 3 1 6     Manawatu P6  x = 1 5 3 4 2 6 1 6 4 5 2 5 4 5 6 5 1 5 3 5 6 1 2 4 2 6 2 1 2 3 2 5 2 3 1 6        Simple monotone symmetric 7-Venn diagrams without polar symmetry  There are in total 23 monotone symmetric Venn diagrams and 17 of these do not have polar symmetry. This was proven in [CMR] . Drawings of all 17 may be found in and their Grünbaum encodings in . The M numbers are from [RW97] and are just a convenient scheme for referring to the individual diagrams. Prior to their appearance in [RW97] only M1 and M2 were known. M1 has the zig-zag middle-two-levels and the rather nice property that each curve intersects each other exactly 6 times. It was discovered by Carla Savage and Peter Winkler. It was never published, but is referred to in [Gr92b] . M2 was discovered by Branko Grünbaum (Figure 6 of [Gr92b] ).    TO DO. A list of the 17 monotone symmetric Venn diagrams without polar symmetry.   A symmetric diagram whose curves are 5-gons. This diagram is from [Gr92b] and is M2 on our list.     The non-polar symmetric simple 7-Venn diagrams, listed in lexicographic order of their Grünbaum encodings.         M1 M17 M12            M13 M14 M5 M7           M15 M6 M10            M11 M16 M9 M4           M2 M3 M8  3     Grünbaum encodings of the seventeen symmetric 7-Venn diagrams without polar symmetry. Listed in lexicographic order of the encoding.    M1  1 3 2 5 2 3 2 4 3 6 1 6 2 4 5 4 6 5 1 6 3 1 4 2 4 6 1 4 2 5 3 5 1 5 3 6    M17  1 3 2 5 2 4 2 6 1 6 2 4 6 5 4 5 1 5 3 1 6 5 4 1 2 6 2 5 3 5 2 5 1 3 2 6    M12  1 3 2 5 4 6 1 4 6 4 2 4 6 5 4 1 5 3 5 1 6 5 4 1 2 6 3 2 3 5 3 2 1 3 2 6    M13  1 3 2 5 6 5 4 1 4 6 5 4 2 4 5 4 1 5 2 6 1 3 6 2 4 2 6 3 2 1 3 5 3 1 3 6    M14  1 3 2 6 4 2 6 3 2 3 1 3 5 1 3 6 1 3 5 2 6 5 4 1 4 6 4 5 4 2 5 4 1 5 2 6    M5  1 3 4 5 2 6 1 6 4 6 2 6 5 4 5 6 1 5 1 3 1 5 1 6 4 2 6 2 1 3 2 5 2 1 3 6    M7  1 3 4 5 4 2 4 6 1 4 2 6 5 4 5 6 5 3 1 3 5 3 1 6 4 2 6 2 1 2 3 2 5 1 3 6    M15  1 3 5 2 4 6 1 4 6 2 4 6 4 5 4 1 5 3 1 5 6 5 4 1 2 6 3 2 5 3 2 3 1 3 2 6    M6  1 3 5 3 2 4 3 6 1 6 4 2 5 4 5 6 1 6 3 6 1 6 4 2 4 6 1 4 1 2 1 3 1 5 3 6    M10  1 3 5 3 2 5 4 5 3 6 1 6 4 2 5 4 2 6 2 5 1 6 1 3 4 2 4 6 1 4 2 3 1 5 3 6    M11  1 3 5 3 2 5 4 6 4 5 3 6 1 2 5 4 2 6 1 6 2 5 1 3 4 2 4 3 1 6 1 4 2 5 3 6    M16  1 3 6 4 2 6 2 3 2 1 3 5 1 6 1 5 3 5 2 5 6 5 4 1 4 6 2 5 2 4 2 5 1 5 2 6    M9  1 4 3 4 5 4 2 6 1 6 4 2 4 5 3 6 3 5 1 5 3 5 6 4 1 6 2 1 2 3 2 5 2 3 1 6    M4  1 4 3 5 2 6 1 6 4 6 2 6 4 6 1 5 1 6 3 6 1 5 1 6 1 4 1 6 1 3 2 5 2 3 1 6    M2  1 4 3 6 2 6 3 5 1 5 3 5 1 6 1 5 2 6 3 6 2 5 2 6 1 4 1 6 1 4 2 5 2 4 1 6    M3  1 4 6 3 2 6 3 5 4 1 4 3 1 6 1 5 2 6 3 6 5 6 1 3 4 3 1 6 1 4 2 5 4 2 1 6    M8  1 5 2 6 2 3 2 5 1 3 4 3 6 4 2 5 4 1 2 6 1 6 4 3 2 6 3 5 4 5 1 5 4 3 1 6        Non-monotone simple symmetric 7-Venn diagrams  Branko Grünbaum was the first to discover a non-monotone symmetric 7-Venn diagram. This diagram is reproduced in and, with regions colored, in The exact number of symmetric 7-Venn diagrams is not known, but there is strong evidence to suggest that there are 33 of them. The reason for this belief is that Stirling Chow conducted a hill-climbing algorithm with randomized choices; this algorithm was run thousands of times without ever discovering more than the 33 that it found in initial runs.    Grünbaum's non-monotone simple symmetric 7-Venn diagram.     Grünbaum's non-monotone simple symmetric 7-Venn diagram. Regions colored according to cardinality.     Computer searches by Stiring Chow have uncovered many other non-monotone simple symmetric 7-Venn diagrams. One of them is illustrated in the figures below.    A simple symmetric non-monotone 7-Venn diagram. Each curve has a different color.     A simple symmetric non-monotone 7-Venn diagram. Regions colored according to cardinality.         Non-simple symmetric 7-Venn diagrams  From computer searches it is apparent that there are many more non-simple diagrams than there are simple diagrams. Using the above techniques, in [We03] the authors generated hundreds of thousands of distinct non-simple monotone symmetric 7-Venn diagrams, including 1576 rigid diagrams (both polar symmetric and not). An example is shown in .   A polar symmetric rigid monotone symmetric 7-Venn diagram from [We03] . This diagram has the minimum number of vertices for a monotone diagram.    For , the value of is 21, which is is divisible by 7. It is thus possible that there is a minimum vertex symmetric Venn diagram in which every curve passes through every vertex. In fact, we have discovered 60 such diagrams, but all discovered so far are non-rigid. Illustrations of two of them are found in , , , and   Hamburger and Pippert, in [HP03] , using different methods than those above, also constructed a minimum-vertex non-monotone symmetric 7-Venn diagram with several nice features. Their diagram is not rigid either.   "
},
{
  "id": "ch-VennSymmetric-5-3-6",
  "level": "2",
  "url": "ch-VennSymmetric-5.html#ch-VennSymmetric-5-3-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Gauss code "
},
{
  "id": "fig-polar7",
  "level": "2",
  "url": "ch-VennSymmetric-5.html#fig-polar7",
  "type": "Figure",
  "number": "4.3.1",
  "title": "",
  "body": " The polar symmetric simple 7-Venn diagrams         Adelaide Hamilton Manawatu         Massey Palmerston Victoria    "
},
{
  "id": "ch-VennSymmetric-5-4-2-6",
  "level": "2",
  "url": "ch-VennSymmetric-5.html#ch-VennSymmetric-5-4-2-6",
  "type": "Table",
  "number": "4.3.2",
  "title": "Grünbaum encodings of the six polar symmetric 7-Venn diagrams.",
  "body": " Grünbaum encodings of the six polar symmetric 7-Venn diagrams.    Adelaide P1  x = 1 4 6 3 6 4 2 5 3 1 4 1 3 6 1 6 2 5 3 6 3 5 1 6 4 3 1 6 2 4 1 4 2 5 1 6     Hamilton P2  x = 1 5 4 3 2 6 1 6 4 5 2 5 4 6 1 5 6 3 6 5 1 6 2 1 4 1 2 6 1 3 2 5 2 3 1 6     Massey P3  w = 1 5 6 3 2 5 3 1 3 4 6 4 2 5 4 1 2 6 1 6 4 6 3 6 2 6 3 4 1 5 1 4 1 3 1 6     Victoria P4  x = 1 4 2 5 3 6 1 6 3 5 3 6 2 5 1 6 1 5 3 6 2 5 1 4 2 6 1 6 2 5 1 4 2 4 1 6     Palmerston P5  w = 1 4 3 4 5 2 3 4 3 6 1 6 4 2 4 5 3 6 3 5 1 6 3 4 1 6 2 4 1 4 2 3 5 3 1 6     Manawatu P6  x = 1 5 3 4 2 6 1 6 4 5 2 5 4 5 6 5 1 5 3 5 6 1 2 4 2 6 2 1 2 3 2 5 2 3 1 6     "
},
{
  "id": "fig-all17",
  "level": "2",
  "url": "ch-VennSymmetric-5.html#fig-all17",
  "type": "Figure",
  "number": "4.3.3",
  "title": "",
  "body": " The non-polar symmetric simple 7-Venn diagrams, listed in lexicographic order of their Grünbaum encodings.         M1 M17 M12            M13 M14 M5 M7           M15 M6 M10            M11 M16 M9 M4           M2 M3 M8  3  "
},
{
  "id": "tbl-all17",
  "level": "2",
  "url": "ch-VennSymmetric-5.html#tbl-all17",
  "type": "Table",
  "number": "4.3.4",
  "title": "Grünbaum encodings of the seventeen symmetric 7-Venn diagrams without polar symmetry. Listed in lexicographic order of the encoding.",
  "body": " Grünbaum encodings of the seventeen symmetric 7-Venn diagrams without polar symmetry. Listed in lexicographic order of the encoding.    M1  1 3 2 5 2 3 2 4 3 6 1 6 2 4 5 4 6 5 1 6 3 1 4 2 4 6 1 4 2 5 3 5 1 5 3 6    M17  1 3 2 5 2 4 2 6 1 6 2 4 6 5 4 5 1 5 3 1 6 5 4 1 2 6 2 5 3 5 2 5 1 3 2 6    M12  1 3 2 5 4 6 1 4 6 4 2 4 6 5 4 1 5 3 5 1 6 5 4 1 2 6 3 2 3 5 3 2 1 3 2 6    M13  1 3 2 5 6 5 4 1 4 6 5 4 2 4 5 4 1 5 2 6 1 3 6 2 4 2 6 3 2 1 3 5 3 1 3 6    M14  1 3 2 6 4 2 6 3 2 3 1 3 5 1 3 6 1 3 5 2 6 5 4 1 4 6 4 5 4 2 5 4 1 5 2 6    M5  1 3 4 5 2 6 1 6 4 6 2 6 5 4 5 6 1 5 1 3 1 5 1 6 4 2 6 2 1 3 2 5 2 1 3 6    M7  1 3 4 5 4 2 4 6 1 4 2 6 5 4 5 6 5 3 1 3 5 3 1 6 4 2 6 2 1 2 3 2 5 1 3 6    M15  1 3 5 2 4 6 1 4 6 2 4 6 4 5 4 1 5 3 1 5 6 5 4 1 2 6 3 2 5 3 2 3 1 3 2 6    M6  1 3 5 3 2 4 3 6 1 6 4 2 5 4 5 6 1 6 3 6 1 6 4 2 4 6 1 4 1 2 1 3 1 5 3 6    M10  1 3 5 3 2 5 4 5 3 6 1 6 4 2 5 4 2 6 2 5 1 6 1 3 4 2 4 6 1 4 2 3 1 5 3 6    M11  1 3 5 3 2 5 4 6 4 5 3 6 1 2 5 4 2 6 1 6 2 5 1 3 4 2 4 3 1 6 1 4 2 5 3 6    M16  1 3 6 4 2 6 2 3 2 1 3 5 1 6 1 5 3 5 2 5 6 5 4 1 4 6 2 5 2 4 2 5 1 5 2 6    M9  1 4 3 4 5 4 2 6 1 6 4 2 4 5 3 6 3 5 1 5 3 5 6 4 1 6 2 1 2 3 2 5 2 3 1 6    M4  1 4 3 5 2 6 1 6 4 6 2 6 4 6 1 5 1 6 3 6 1 5 1 6 1 4 1 6 1 3 2 5 2 3 1 6    M2  1 4 3 6 2 6 3 5 1 5 3 5 1 6 1 5 2 6 3 6 2 5 2 6 1 4 1 6 1 4 2 5 2 4 1 6    M3  1 4 6 3 2 6 3 5 4 1 4 3 1 6 1 5 2 6 3 6 5 6 1 3 4 3 1 6 1 4 2 5 4 2 1 6    M8  1 5 2 6 2 3 2 5 1 3 4 3 6 4 2 5 4 1 2 6 1 6 4 3 2 6 3 5 4 5 1 5 4 3 1 6    "
},
{
  "id": "fig-GrunNonMono7",
  "level": "2",
  "url": "ch-VennSymmetric-5.html#fig-GrunNonMono7",
  "type": "Figure",
  "number": "4.3.5",
  "title": "",
  "body": " Grünbaum's non-monotone simple symmetric 7-Venn diagram.   "
},
{
  "id": "fig-GrunNonMono7rain",
  "level": "2",
  "url": "ch-VennSymmetric-5.html#fig-GrunNonMono7rain",
  "type": "Figure",
  "number": "4.3.6",
  "title": "",
  "body": " Grünbaum's non-monotone simple symmetric 7-Venn diagram. Regions colored according to cardinality.   "
},
{
  "id": "sec-nonmono7-5-1",
  "level": "2",
  "url": "ch-VennSymmetric-5.html#sec-nonmono7-5-1",
  "type": "Figure",
  "number": "4.3.7",
  "title": "",
  "body": " A simple symmetric non-monotone 7-Venn diagram. Each curve has a different color.   "
},
{
  "id": "sec-nonmono7-5-2",
  "level": "2",
  "url": "ch-VennSymmetric-5.html#sec-nonmono7-5-2",
  "type": "Figure",
  "number": "4.3.8",
  "title": "",
  "body": " A simple symmetric non-monotone 7-Venn diagram. Regions colored according to cardinality.   "
},
{
  "id": "img-7-VD-polar-rigid",
  "level": "2",
  "url": "ch-VennSymmetric-5.html#img-7-VD-polar-rigid",
  "type": "Figure",
  "number": "4.3.9",
  "title": "",
  "body": " A polar symmetric rigid monotone symmetric 7-Venn diagram from [We03] . This diagram has the minimum number of vertices for a monotone diagram.   "
},
{
  "id": "ch-VennSymmetric-6",
  "level": "1",
  "url": "ch-VennSymmetric-6.html",
  "type": "Section",
  "number": "4.4",
  "title": "Symmetric diagrams with <span class=\"process-math\">\\(n = 11,13\\)<\/span> curves",
  "body": " Symmetric diagrams with curves    Hamburger's non-simple symmetric 11-Venn diagram  Peter Hamburger [Ha02] constructed the first symmetric 11-Venn diagram. The diagram is monotone and highly non-simple. It is very similar in form to the diagram for from (Symmetric Diagrams, Necklaces, and Chains) but is vastly more complicated because of increase in the the number of regions, intersection points, etc. In fact, the diagram is so intricate that it is difficult to show in a single figure. One sector of the diagram is shown in . Successive sectors may be obtained from this one by cyclicly permuting the colors.   A sector of the cylindrical representation of Hamburger's symmetric 11-Venn diagram. All 11 curves intersect at the left and at the right boundaries of this diagram.     A sector of the cylindrical representation of Hamburger's symmetric 11-Venn diagram, with the dual superimposed.     The dual of sector of the cylindrical representation of Hamburger's symmetric 11-Venn diagram.    The construction method for this diagram uses a partition of the set of all bitstrings of length 11. Recall that the Venn dual can be labelled with bitstrings corresponding to regions, as we discussed , Graphs Associated with Venn Diagrams. The construction then uses chains of bitstrings connected together to build the large dual graph of the sector, which then is repeated to give the entire diagram.  Since the diagram is highly non-simple and not rigid, the diagram can be turned in to many others by separating any or all separable vertices. Hamburger has published variants of the diagram with vertex sets from 462 up to 1001 by increments of 11 in [Ha02b] . He and other co-authors have used similar techniques to create other diagrams; see the sub-sections below.  For , the minimum possible number of vertices is . This is not divisible by 11, so the smallest number of vertices possible in a symmetric 11-Venn diagram is at least . In [HS03] Hamburger and Sali extended the above method to produce a diagram with vertices, quite close to the minimum possible, and then later found a diagram with vertices (as yet unpublished - thanks to Peter Hamburger for showing us the diagram). Of course, the resulting diagrams are highly non-monotone, since a monotone 11-Venn diagram has at least vertices by .  Many of the symmetric 11-Venn diagrams mentioned here, in papers by Peter Hamburger and his co-authors, have been turned into works of art by the artist Edit Hepp, Hamburger's spouse. Readers are encouraged to seek out the papers in print to view the diagrams. The processes used to create the artwork are explained in [HH] .    Mamakani's simple symmetric 11-Venn diagram  Although Hamburger found a non-simple symmetric 11-Venn diagram, there seemed little hope of extending his ad-hoc methodology or diagrams to get a simple symmetric 11-Venn diagram; some significant new insights were needed. Some people had attempted algorithmic solutions, but had met with failure because the potential solution space is so huge. In this sub-subsection we will give an outline of an approach that succeeded along with some relevant figures, some of which are rather attractive.  One strategy is to reduce the size of the potential solution space by imposing additional constraints on the diagrams, but one has to be careful; too much constraint and there may be no such diagram, too little and the solution space can still be to large. Mamakani's approach was to look for additional properties in subsets of the set of symmetric 7-Venn diagrams. To that end, we define a crosscut in a Venn diagram.   Crosscut   A crosscut in a simple monotone -Venn diagram is a segment of a curve that extends from the innermost face to the (unbounded) outermost face, and intersects each of the other curves exactly once.    Imagine a curve in a Venn diagram. By the can touch the outer face at most once, and the inner face at most once. Hence, it is impossible for to have 3 or more crosscuts in a Venn diagram. For a curve in a -Venn diagram to have 2 crosscuts, that curve must have exactly intersections with other curves in the diagram; that is, such a curve must intersect all curves as it extends from the unbounded exterior to the interior of all the curves, and then hit all curves again as it returns to the unbounded exterior; let us call such a curve a mint curve, since it has the m inimum number of int ersections possible in a Venn diagram. curve mint   For each there is an -Venn diagram in which two distinct curves have two crosscuts; that is, the Venn diagram contains two mint curves. For example consider the cylindrical projection of Edwards 8-Venn diagram shown in . Observe that the red and black curves are mint curves; each part of the curve drawn as a straight line intersects 6 curves, and the 7th intersection is a red-black intersection. For it is not known whether there exists an -Venn diagram with 3 or more mint curves.   Cylindrical drawing of Edwards 8-Venn diagram. The black and red curves are mint curves.      If , then a simple symmetric -Venn diagram has a most one crosscut per curve.    We argued above that a curve in a Venn diagram can not have three or more crosscuts. Suppose that there is a mint curve in a symmetric -Venn diagram. Since the diagram is symmetric, every curve must be a mint curve, and thus the total number of intersections (vertices) in the diagram is . On the other hand, a simple -Venn diagram has exactly vertices. The equation has a solution for , but not for any .    The -Venn diagrams with a crosscut are Hamilton (P2), Manawatu (P6), Victoria (P4), M4, M5, M11, M12, and M15. This is easily verified examining the drawings in and , or by looking for subsequences in the Grunbaum encodings of the form , where is a permutation of . For example, in M11 , and referring to , the subsequence is .   A cluster in the symmetric Venn diagram M4.    However, restricting the search to only diagrams with a crosscut still took too long, and so the search was further refined by looking for some symmetric substructures within the diagrams possessing a crosscut. Consider . The colored part of the diagram is called a cluster ; it is an edge-connected collection of regions, that, when rotated times, uniquely accounts for each face of the Venn diagram, except for the innermost and outermost faces. The particular cluster shown has a symmetric substructure when reflected about the crosscut, as shown in .   A cluster in the symmetric Venn diagram M4, cylindrical representation.    We can formalize the symmetry that we observe in by considering lists of curve intersections. Assume that the curves have been labelled in clockwise order where the crosscut is .    Newroz, the first simple symmetric 11-Venn diagram.    Venn diagram polar symmetric   There is no monotone simple symmetric -Venn diagram with crosscut and polar symmetry for .       Symmetric diagrams with curves   When the same approach used in the previous section is applied to try and find a symmetric 13-Venn diagram, the seach space seemed to be too large and no solution was produced. However, by refining the idea of a crosscut, many solutions were eventually found. Let us re-examine a diagram the has crosscut symmetry,    The crosscut symmetric diagram Hamilton .     A cluster of Hamilton .     "
},
{
  "id": "fig-Hamburger11",
  "level": "2",
  "url": "ch-VennSymmetric-6.html#fig-Hamburger11",
  "type": "Figure",
  "number": "4.4.1",
  "title": "",
  "body": " A sector of the cylindrical representation of Hamburger's symmetric 11-Venn diagram. All 11 curves intersect at the left and at the right boundaries of this diagram.   "
},
{
  "id": "fig-Hamburger11withDual",
  "level": "2",
  "url": "ch-VennSymmetric-6.html#fig-Hamburger11withDual",
  "type": "Figure",
  "number": "4.4.2",
  "title": "",
  "body": " A sector of the cylindrical representation of Hamburger's symmetric 11-Venn diagram, with the dual superimposed.   "
},
{
  "id": "fig-Hamburger11dualOnly",
  "level": "2",
  "url": "ch-VennSymmetric-6.html#fig-Hamburger11dualOnly",
  "type": "Figure",
  "number": "4.4.3",
  "title": "",
  "body": " The dual of sector of the cylindrical representation of Hamburger's symmetric 11-Venn diagram.   "
},
{
  "id": "def-crosscut",
  "level": "2",
  "url": "ch-VennSymmetric-6.html#def-crosscut",
  "type": "Definition",
  "number": "4.4.4",
  "title": "",
  "body": " Crosscut   A crosscut in a simple monotone -Venn diagram is a segment of a curve that extends from the innermost face to the (unbounded) outermost face, and intersects each of the other curves exactly once.   "
},
{
  "id": "ch-VennSymmetric-6-3-5",
  "level": "2",
  "url": "ch-VennSymmetric-6.html#ch-VennSymmetric-6-3-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mint "
},
{
  "id": "fig-Edwards_Cylinder",
  "level": "2",
  "url": "ch-VennSymmetric-6.html#fig-Edwards_Cylinder",
  "type": "Figure",
  "number": "4.4.5",
  "title": "",
  "body": " Cylindrical drawing of Edwards 8-Venn diagram. The black and red curves are mint curves.   "
},
{
  "id": "ch-VennSymmetric-6-3-8",
  "level": "2",
  "url": "ch-VennSymmetric-6.html#ch-VennSymmetric-6-3-8",
  "type": "Theorem",
  "number": "4.4.6",
  "title": "",
  "body": "  If , then a simple symmetric -Venn diagram has a most one crosscut per curve.    We argued above that a curve in a Venn diagram can not have three or more crosscuts. Suppose that there is a mint curve in a symmetric -Venn diagram. Since the diagram is symmetric, every curve must be a mint curve, and thus the total number of intersections (vertices) in the diagram is . On the other hand, a simple -Venn diagram has exactly vertices. The equation has a solution for , but not for any .   "
},
{
  "id": "fig-VD7cluster",
  "level": "2",
  "url": "ch-VennSymmetric-6.html#fig-VD7cluster",
  "type": "Figure",
  "number": "4.4.7",
  "title": "",
  "body": " A cluster in the symmetric Venn diagram M4.   "
},
{
  "id": "ch-VennSymmetric-6-3-11",
  "level": "2",
  "url": "ch-VennSymmetric-6.html#ch-VennSymmetric-6-3-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cluster "
},
{
  "id": "fig-VD7clusterCyl",
  "level": "2",
  "url": "ch-VennSymmetric-6.html#fig-VD7clusterCyl",
  "type": "Figure",
  "number": "4.4.8",
  "title": "",
  "body": " A cluster in the symmetric Venn diagram M4, cylindrical representation.   "
},
{
  "id": "fig-Newroz",
  "level": "2",
  "url": "ch-VennSymmetric-6.html#fig-Newroz",
  "type": "Figure",
  "number": "4.4.9",
  "title": "",
  "body": "  Newroz, the first simple symmetric 11-Venn diagram.  "
},
{
  "id": "ch-VennSymmetric-6-3-15",
  "level": "2",
  "url": "ch-VennSymmetric-6.html#ch-VennSymmetric-6-3-15",
  "type": "Theorem",
  "number": "4.4.10",
  "title": "",
  "body": " Venn diagram polar symmetric   There is no monotone simple symmetric -Venn diagram with crosscut and polar symmetry for .   "
},
{
  "id": "fig-HamiltonCurves",
  "level": "2",
  "url": "ch-VennSymmetric-6.html#fig-HamiltonCurves",
  "type": "Figure",
  "number": "4.4.11",
  "title": "",
  "body": " The crosscut symmetric diagram Hamilton .   "
},
{
  "id": "fig-HamiltonCluster",
  "level": "2",
  "url": "ch-VennSymmetric-6.html#fig-HamiltonCluster",
  "type": "Figure",
  "number": "4.4.12",
  "title": "",
  "body": " A cluster of Hamilton .   "
},
{
  "id": "sec-SymmGeneral",
  "level": "1",
  "url": "sec-SymmGeneral.html",
  "type": "Section",
  "number": "4.5",
  "title": "Symmetric Diagrams for all prime <span class=\"process-math\">\\(n\\)<\/span>",
  "body": " Symmetric Diagrams for all prime   The highlight of this section is the construction symmetric -Venn diagrams for all prime , due to Griggs, Killian, and Savage [GKS] . The presentation borrows extensively from the expository article of Ruskey, Savage, and Wagon [RSW] . Not all proofs are given but the presentation is rigourous and the careful reader should be able to construct symmetric Venn diagrams of their own after digesting it. The diagrams constructed are all non-simple and it remains an interesting challenge to find a construction that produces simple symmetric Venn diagrams when is prime. We begin by discussing chain decompositions of the Boolean lattice, a useful tool in the construction of various kinds of Venn diagrams.    Chain decompositions of the Boolean lattice  In this sub-section we introduce symmetric chain decompositions of the Boolean lattice and explain how they can be useful in the construction of Venn diagrams, particulary symmetric Venn diagrams. Recall that the dual of any -Venn diagram is a spanning plane subgraph of the hypercube . There is a partial order, closely related to the hypercube, call the Boolean lattice.   Boolean lattice  symmetric chain decomposition   The Boolean lattice , , is the partial order whose elements are the subsets of , ordered by inclusion. A chain in is a sequence of elements of such that . The chain is symmetric if . A symmetric chain decomposition (or SCD) of is a partition of the elements of into symmetric chains.     Hasse diagram Note that the Hasse diagram of , regarded as a graph, is isomorphic to . It is a well-known result of order theory that has a SCD for every natural number , and that the number of chains in the SCD is . Regard each of the elements of as a bitstring of length . We will outline two methods of obtaining a symmetric chain decomposition. The first is a recursive construction starting with the chain for . Let be a chain in the SCD of . Then the substitution shown below gives two new chains in the SCD of ; however, if , then there is only one new chain.   If we do these substitutions simultaneously for each for , then we obtain the following sequence of SCDs, culminating in an SCD for .   The recursive method described above is due to de Bruijn, van Ebbenhorst Tengbergen, and Kruyswijk [BTK] , and the method of stacking the recursive expansions one atop the other is called the \"Christmas tree pattern\" by Knuth [Kn,pg.457] . Another construction, due to Greene and Kleitman [GK] will be described now. In the end, the SCDs described by both constructions are the same. The [BTK] method can be thought of as a global recursive method, but the [GK] method is entirely local; given an element of a chain it tells you how to get the element above it in the SCD.  Think of 1 bits as right parentheses and 0 bits as left parentheses. Now match pairs of bits in the usual way parenthese are matched, as much as possible. It may happen that there are unmatched 0s or unmatched 1s, or both. For example, consider 1001011100010. Matching, in a slight abuse of notation, we obtain 1(()())100()0. Observe that all the unmatched 1s precede all the unmatched 0s, a property that holds in general.  In a binary string, regard each `1' as a right parenthesis and each `0' as a left parenthesis and then match parentheses in the usual way as much as possible. For example, in the string    1 0 0 1 0 0 1  1 1 1 0 0 1 0                                       1 0 0 1 0 0 1  1 1 1 1 0 1 0   the parentheses in green are matched with the parentheses in red. The black underlined 0s and 1s are unmatched. Then chains of strings can be formed by using the Greene-Kleitman successor rule :   Given a bitstring , change the first unmatched 0 in to a 1 to get its successor .   In the example above, the string becomes . The rule could be applied twice more, and then there are no more unmatched 0s. Note that the matched bits remained fixed throughout the entire chain.   colex order Greene and Kleitman showed in [GK] that, if the strings chosen to start the chains are exactly those with no unmatched 1, then the resulting chains (formed by applying the above rule successively to each chain starter until there are no unmatched 0s) form a symmetric chain decomposition of the Boolean lattice. That is, every -bit string will occur exactly once in the resulting chains. The reader is encourage to check that the SCD produced recursively above ( ) adheres to the successor rule, and that the initial element of every chain is a chain starter. It it worth noting that the rightmost elements of the chains appear in colex order (in colex order is like lexicographic if the strings are scanned from right-to-left instead of left-to-right).  The chains in are laid out as in the recursive construction. And then, in , additional thin edges are added, each of which corresponds to a cover relation in the Hasse diagram of the lattice; that is, a change of a 0 to a 1 when moving upward along that relation. Each relation, including those of the SCD, are labelled according to the index of the bit that changes. The added edges form a pair of trees, one of which is a reflection (and relabelling) of the other. The upper tree can be formed, in general, by obtaining the parent of an element by changing its leftmost 0 into a 1. The lower tree can be formed, in general, by the slightly more complicated rule of obtaining the parent by changing the righmost matched 1 to a 0. One still needs to prove that the edges so formed in the two trees do correspond to one another. This is not difficult, but is left to the reader. Call the resulting diagram ; we will show that it is the dual of a Venn diagram.    A symmetric chain decomposition of .     Embedding with cover edges, with each edge colored.        The curves of the diagram overlaid on the dual.     The curves of the diagram, regions labelled with bitstrings.       Symmetric Diagrams, Necklaces, and Chains  The Venn diagram, discovered by Stirling Chow and the author in 1996, and shown in has a number of remarkable properties. First, it has the least number of vertices among all monotone 5-Venn diagrams by a result of [BR] . Secondly, two cut-vertices delimit a circular sector which can be rotated to get the full diagram. Of course, the colors of the curves must also be \"rotated.\" The same principles used to discover this diagram can be used to obtain similar 7-Venn diagrams, such as the one discovered by the author in 1997 and explained below; the same ideas were used by Hamburger in discovering (see ) his diagram for and by Griggs, Killian and Savage in their amazing construction for symmetric diagrams for all prime , discussed later in the next subsection.   The trick-or-treat Venn diagram. It had this fanciful name because it is a Venn diagram that appears at first glance to be constructed from circles, but this is only possible if ( and it was discovered around Haloween 1996???).    We will explain how this Venn diagram was obtained. Recall that a necklace is an equivalence class of strings under rotation. Here the strings are binary (bitstrings); i.e., taken over the two letter alphabet . Since is prime, each of the rotations is distinct (if the string is not either all 0s or all 1s). When the necklaces are 00000, 00001, 00011, 00101, 00111, 01011, 01111, 11111, where we have taken the lexicographically least necklace in each equivalence class, and then listed them in lexicographic order.  Now form symmetric chains that include one representative from each necklace equivalence class, omitting the all 0s and all 1s necklaces. For example if one takes, the two chains and then all equivalence classes are represented. Notice how these two chains occur in the bottom hexagon of .    The dual graph. Certain symmetric chains are highlighted.     The curves corresponding to 1\/5 of the dual.       Repeating in each sector.     The final Venn diagram.     The astute reader will have noticed that the diagram of is different than that of even if the curves are relabelled. However, it was obtained by the same basic technique. Different diagrams could arise depending on which set of necklace representatives are chosen for that sector, which symmetric chains are formed from those representatives, and how they are laid out in the plane. Furthermore, any fixed circular permutation can be used in relabelling from sector to sector.  We will now give a somewhat larger example, with . Below in we show a lattice of necklaces, the ranks of the lattice giving the number of black beads (the all yellow and all black necklaces have been omitted). The relation is subset inclusion on the black bead numbers. Each cover relation of the lattice has been labelled with the number of the bead that changes. The lattice now has the property that every path from the top to the bottom is a permutation of . These properties are sufficient to allow us to construct a Venn diagram.  Consider each necklace to be a vertex in the dual graph as shown in the figure to the right. The edge numbering allows us to draw curves from left-to-right; curve 2 has been colored red. Copying this seven times results in the Venn diagram shown at the bottom of the page. The curves are renumbered in each successive pie-slice by adding 1 (mod ). Curve one has been colored in green. Note that curve 2 in the defining pie-slice has become curve 1 in the second pie slice, and so on.  When will the resulting diagram have the least number of vertices? Exactly when the middle two levels of the lattice diagram form a perfect matching, as they do here.    The lattice of necklaces forming the dual of th of a 7-Venn diagram.     The corresponding sector of the diagram. Curve 2 is shown in red.      The entire diagram, in its entirety, formed by rotating the sector. The green curve is curve 1.      The GKS Construction  Using ideas similar to those above, Jerrold Griggs, Chip Killian, and Carla Savage [GKS] produced a construction for a symmetric -Venn diagram for any prime . The difficult part is constructing a plane embedding of a lattice of necklaces such that every string of length is represented exactly once by a necklace. We start by illustrating how to build chains of -bit strings, and then show how to link them up to form a dual graph like the one above.  Griggs, Killian, and Savage used a variant of the Greene-Kleitman rule to construct a symmetric chain decomposition of only th of the strings to form a necklace diagram like that above. They build a set with size , consisting of necklace representatives. To choose the appropriate representatives, they use the notion of a block code for an -bit string: let be an -bit string. If begins with 0 or ends with 1, the block code is infinity ( ). Otherwise, consists of some number of disjoint blocks of the form , and the block code is simply the sequence of the lengths of these blocks.  For example, the block codes of the string 1100100 and all of its 7 rotations are shown below:   bitstring  block code                                 Another example is given below but the block codes have been omitted. Note that the block codes are rotations of each other, a property that clearly holds in general.    bitstring  block code  bitstring  block code                  For each -bit string, the rotation chosen as the representative in is that which has the lexicographically-least block code. For example, for the string above, the rotation 1001100 is the choice to be in since (3,4) is lexicographically smaller than (4,3); similarly, 1011101011000 is the representative in the second example. The authors of [GKS] show that this rule results in exactly one necklace representative for each equivalence class of strings under rotation, which is unique since is prime.  Given , the chains are built using this variation of the Greene-Kleitman successor rule:   Start with a string in with exactly one unmatched 1 (which must be in the first position). If there are at least two unmatched 0s in , change the first unmatched 0 to 1 to obtain the successor of . Continue until a string with only one unmatched 0 is reached.   It is shown in [GKS] that this gives a symmetric chain decomposition of the subset of the Boolean lattice defined by . The chains so constructed are illustrated below as vertical columns of strings connected by thick black edges.  The dual of the Venn diagram is formed by imposing a tree structure on the set of chains. Identify each chain with its chain starter , which is defined to be a string with exactly one unmatched 1. For the chain starters are 1000000, 1001000, 1001100, 1010000, 1010100. In general, the root of the tree is , the lowest element in the unique chain with elements. The parent of other chain starters is obtained by changing the rightmost 1 into a 0. For the tree so constructed is illustrated below in with the green edges.  To finish obtaining the dual a symmetric tree is formed from the final elements in the chains (strings with one unmatched 0). These edges of this symmetric tree are shown in blue in . The dual graph of a sector like those above can now be created by embedding in the plane the tree as defined, embedding each chain vertically starting from the nodes in the tree, and then embedding the tree attached to the final elements in the chains. below shows a plane graph that results from the construction for (ignore the red edges for now). There are 42 chain starters for . Finally, in we show a beautiful rendering of the GKS 11-Venn diagram with regions colored according to cardinality. Because the diagram is not simple, it is not possible to recover an individual curve from this figure, but it is sure nice to look at!   This partial order can be turned into a symmetric 7-Venn diagram by the process illustrated at the end of .   The dual of a 1\/7th of a 7-Venn diagram, as constructed by the GKS method.     The dual of 1\/11th of the GKS 11-Venn diagram.     The GKS 11-Venn diagram with regions colored.      Half-simple Venn diagrams   Venn diagram half-simple In [KRSW] the authors showed that more edges, and hence regions, can be added in the dual, which has the effect of adding vertices to the the Venn diagram. In we showed how vertices can be split, adding one edge to the dual. Equivalently, we can add edges to the dual, which we do here. These additional edges are shown in red in ; notice that each red edge corresponds to a bit changing from a 0 to a 1 as we move up the edge. In the red edges are also added edges for the GKS 11-Venn diagram. In the general graph constructed above, the face formed between each chain and the child chain embedded immediately beside it can have edges added; the number of extra edges is equal to one less than the number of elements in the shorter chain. Over the entire resulting Venn diagram, it can be proven that the number of vertices increases to asympotically exceed , which is more that half the number of vertices in a simple Venn diagram. For this reason, that authors of [KRSW] call them \"half-simple\" Venn diagrams.   Quadrangulating edges added to the partial dual in .     is an interesting overlay of a half-simple 11-Venn diagram, due to Stan Wagon, that appeared on the cover of the Notices of the American Mathematical Society in December 2006. The back ground is the dual of the Venn diagram, with the various faces properly colored with 4 differing shades of gray. The foreground shows one of the 11 curves in black, and the interior of that curve contains half of the Venn diagram, 1024 regions, each region colored differently according to its cardinality.   Stan Wagon's primal\/dual overlay rendering of a half-simple 11-Venn diagram.     "
},
{
  "id": "subsec-SymmChains-3",
  "level": "2",
  "url": "sec-SymmGeneral.html#subsec-SymmChains-3",
  "type": "Definition",
  "number": "4.5.1",
  "title": "",
  "body": " Boolean lattice  symmetric chain decomposition   The Boolean lattice , , is the partial order whose elements are the subsets of , ordered by inclusion. A chain in is a sequence of elements of such that . The chain is symmetric if . A symmetric chain decomposition (or SCD) of is a partition of the elements of into symmetric chains.   "
},
{
  "id": "fig-4chains",
  "level": "2",
  "url": "sec-SymmGeneral.html#fig-4chains",
  "type": "Figure",
  "number": "4.5.2",
  "title": "",
  "body": " A symmetric chain decomposition of .   "
},
{
  "id": "fig-4cover",
  "level": "2",
  "url": "sec-SymmGeneral.html#fig-4cover",
  "type": "Figure",
  "number": "4.5.3",
  "title": "",
  "body": " Embedding with cover edges, with each edge colored.   "
},
{
  "id": "fig-4chainsOverlay",
  "level": "2",
  "url": "sec-SymmGeneral.html#fig-4chainsOverlay",
  "type": "Figure",
  "number": "4.5.4",
  "title": "",
  "body": " The curves of the diagram overlaid on the dual.   "
},
{
  "id": "fig-4chainsVenn",
  "level": "2",
  "url": "sec-SymmGeneral.html#fig-4chainsVenn",
  "type": "Figure",
  "number": "4.5.5",
  "title": "",
  "body": " The curves of the diagram, regions labelled with bitstrings.   "
},
{
  "id": "fig-howcirc",
  "level": "2",
  "url": "sec-SymmGeneral.html#fig-howcirc",
  "type": "Figure",
  "number": "4.5.6",
  "title": "",
  "body": " The trick-or-treat Venn diagram. It had this fanciful name because it is a Venn diagram that appears at first glance to be constructed from circles, but this is only possible if ( and it was discovered around Haloween 1996???).   "
},
{
  "id": "fig-5venn_dualchain",
  "level": "2",
  "url": "sec-SymmGeneral.html#fig-5venn_dualchain",
  "type": "Figure",
  "number": "4.5.7",
  "title": "",
  "body": " The dual graph. Certain symmetric chains are highlighted.   "
},
{
  "id": "fig-5venn_slice",
  "level": "2",
  "url": "sec-SymmGeneral.html#fig-5venn_slice",
  "type": "Figure",
  "number": "4.5.8",
  "title": "",
  "body": " The curves corresponding to 1\/5 of the dual.   "
},
{
  "id": "fig-5venn_overlay",
  "level": "2",
  "url": "sec-SymmGeneral.html#fig-5venn_overlay",
  "type": "Figure",
  "number": "4.5.9",
  "title": "",
  "body": " Repeating in each sector.   "
},
{
  "id": "fig-5venn_curves",
  "level": "2",
  "url": "sec-SymmGeneral.html#fig-5venn_curves",
  "type": "Figure",
  "number": "4.5.10",
  "title": "",
  "body": " The final Venn diagram.   "
},
{
  "id": "fig-NeckLattice7",
  "level": "2",
  "url": "sec-SymmGeneral.html#fig-NeckLattice7",
  "type": "Figure",
  "number": "4.5.11",
  "title": "",
  "body": " The lattice of necklaces forming the dual of th of a 7-Venn diagram.   "
},
{
  "id": "fig-NeckSector7",
  "level": "2",
  "url": "sec-SymmGeneral.html#fig-NeckSector7",
  "type": "Figure",
  "number": "4.5.12",
  "title": "",
  "body": " The corresponding sector of the diagram. Curve 2 is shown in red.   "
},
{
  "id": "fig-Ellipse7green",
  "level": "2",
  "url": "sec-SymmGeneral.html#fig-Ellipse7green",
  "type": "Figure",
  "number": "4.5.13",
  "title": "",
  "body": " The entire diagram, in its entirety, formed by rotating the sector. The green curve is curve 1.   "
},
{
  "id": "sec-SymmGeneral-5-3",
  "level": "2",
  "url": "sec-SymmGeneral.html#sec-SymmGeneral-5-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "block code "
},
{
  "id": "sec-SymmGeneral-5-11",
  "level": "2",
  "url": "sec-SymmGeneral.html#sec-SymmGeneral-5-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "chain starter "
},
{
  "id": "fig-7GKS",
  "level": "2",
  "url": "sec-SymmGeneral.html#fig-7GKS",
  "type": "Figure",
  "number": "4.5.14",
  "title": "",
  "body": " The dual of a 1\/7th of a 7-Venn diagram, as constructed by the GKS method.   "
},
{
  "id": "fig-11venn_quaddual",
  "level": "2",
  "url": "sec-SymmGeneral.html#fig-11venn_quaddual",
  "type": "Figure",
  "number": "4.5.15",
  "title": "",
  "body": " The dual of 1\/11th of the GKS 11-Venn diagram.   "
},
{
  "id": "fig-11-VD-rainbowNAMS",
  "level": "2",
  "url": "sec-SymmGeneral.html#fig-11-VD-rainbowNAMS",
  "type": "Figure",
  "number": "4.5.16",
  "title": "",
  "body": " The GKS 11-Venn diagram with regions colored.   "
},
{
  "id": "fig-7GKSquad",
  "level": "2",
  "url": "sec-SymmGeneral.html#fig-7GKSquad",
  "type": "Figure",
  "number": "4.5.17",
  "title": "",
  "body": " Quadrangulating edges added to the partial dual in .   "
},
{
  "id": "fig-11wagon",
  "level": "2",
  "url": "sec-SymmGeneral.html#fig-11wagon",
  "type": "Figure",
  "number": "4.5.18",
  "title": "",
  "body": " Stan Wagon's primal\/dual overlay rendering of a half-simple 11-Venn diagram.   "
},
{
  "id": "sec-Spherical",
  "level": "1",
  "url": "sec-Spherical.html",
  "type": "Section",
  "number": "4.6",
  "title": "Spherical Venn Diagrams",
  "body": " Spherical Venn Diagrams   group Klein 4-group There is a much richer set of symmetries of the sphere than there on the plane, and it is natural to investigate whether these additional symmetries can be possessed by Venn diagrams. As the reader works their way through this subsection, it can be useful to have actual spheres to hold and view. The author once bought a gross of white ping pong balls to draw on while investigating spherical Venn diagrams with his grad students!  Let's consider a few examples of -Venn diagrams for small . The case of is rather uninteresting since a circle in the plane has infintely many symmetries, both reflections and rotations. For things are rather more interesting. In the plane, the standard two circle diagram has 4 symmetries, based on reflections about a line through the centers of the circles, and about a line through the 2 points of intersection. See . It is interesting that reflection about the horizontal axis leaves the colors of the circles fixed, whereas the vertical reflection necessitates a color swap. Here the group of symmetries is Known as the Klein -group. However, on the sphere, the diagram can be drawn as 2 great circles, which intersect perpendicularly at two antipodal points (the poles), as in .    A 2-Venn diagram embedded in the plane.     A 2-Venn diagram embedded on a sphere.      fundamental domain On the sphere there a clearly many more symmetries for the 2-Venn diagram, but how many exactly? Symmetries are obtained by rotating and reflecting. Rotations occur in increments of radians about the polar axis, and by rotating about axes that intersect the equator at antipodal points; these points are located where the equator intersects a curve (two axes) and at the half-way points between two points of intersection with the equator (another two axes). Reflections can be about a plane through the equator, and planes through the poles and one of the eight points along the equator mentioned before. The effect of these rotations\/reflections and their compositions is that the light blue region, which makes up 1\/16 of the sphere (a seqment of the curve is included with this region) can be mapped to any of the 16 such regions, which makes up the entire sphere. The light blue region of the sphere is known as a fundamental domain . Thus we get a much richer set of symmetries for the 2-Venn diagram on the sphere, 4 on the plane versus 16 of them on the sphere.    A 3-Venn diagram embedded in the plane. Symmetry preserving reflective axes shown.     A 3-Venn diagram embedded on a sphere.      octahedron  cube Moving on to , first, what is the set of symmetries in the plane? It is not hard to see that there are 6 of them, using rotations by and reflection about lines through the centers of the circles and the center of the diagram as a whole. See . To move things into 3 dimensions, we make the equator in into a blue curve, as shown in . Now what is the group of symmetries? If we join the 6 points of intersection in with straight lines instead of circular arcs, then we obtain an octahedron. The dual of an octahedron is a 3-cube. Thus the symmetries are those of the cube, and so there are 48 of them! Another way to see this is to consider the fundamental domain, shown as a lightly shaded triangle like area in including the blue circular arc at the bottom of the triangle. The entire sphere can be covered with 48 of these areas, modulo a recoloring of the curve. To make it clearer that the fundamental domain covers of a Venn diagram region, it is also shown in . Again, there is a much richer set of symmetries when a Venn diagram is embedded on the sphere instead of the plane.  For there is only one simple Venn diagram, and it's most symmetric rendering is from the Edwards construction, as in . On the sphere, we are adding a new curve that intersects the equator in 4 places.   involution  antipodal The systematic mathematical study of symmetries of Venn diagrams on the sphere was initiated in Mark Weston's PhD thesis, [We09] . Some results of the thesis are reported in [RW11] . An involution is a self-inverse mapping. Amongst isometric mappings of the sphere onto itself, the involutory mappings fall into three categories: reflections about a plane through a great circle, reflections about a line through the center of the sphere, and reflections through the center of the sphere. We will refer to the symmetry of reflections through the center of the sphere as antipodal symmetry , since antipodal points are mapped to each other.    For every there is an -Venn diagram with antipodal symmetry.    In this paper we give a construction, for any n, of an n-Venn diagram on the sphere that has antipodal symmetry; that is, the diagram is fixed by the map that takes a point on the sphere to the corresponding antipodal point. Thus, along with certain diagrams due to Anthony Edwards which can be drawn with rotational and reflective symmetry, for any isometry of the sphere that is an involution, there exists an n-Venn diagram on the sphere invariant under that involution. Our construction uses a recursively defined chain decomposition of the Boolean lattice.  Mathematicians have studies the possible symmetries of the sphere in great detail and it turns out that there are 14 of them.  "
},
{
  "id": "fig-2vennAxes",
  "level": "2",
  "url": "sec-Spherical.html#fig-2vennAxes",
  "type": "Figure",
  "number": "4.6.1",
  "title": "",
  "body": " A 2-Venn diagram embedded in the plane.   "
},
{
  "id": "fig-2vennSphere",
  "level": "2",
  "url": "sec-Spherical.html#fig-2vennSphere",
  "type": "Figure",
  "number": "4.6.2",
  "title": "",
  "body": " A 2-Venn diagram embedded on a sphere.   "
},
{
  "id": "sec-Spherical-5",
  "level": "2",
  "url": "sec-Spherical.html#sec-Spherical-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "fundamental domain "
},
{
  "id": "fig-3vennAxes",
  "level": "2",
  "url": "sec-Spherical.html#fig-3vennAxes",
  "type": "Figure",
  "number": "4.6.3",
  "title": "",
  "body": " A 3-Venn diagram embedded in the plane. Symmetry preserving reflective axes shown.   "
},
{
  "id": "fig-3vennSphere",
  "level": "2",
  "url": "sec-Spherical.html#fig-3vennSphere",
  "type": "Figure",
  "number": "4.6.4",
  "title": "",
  "body": " A 3-Venn diagram embedded on a sphere.   "
},
{
  "id": "sec-Spherical-9",
  "level": "2",
  "url": "sec-Spherical.html#sec-Spherical-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "involution antipodal symmetry "
},
{
  "id": "sec-Spherical-10",
  "level": "2",
  "url": "sec-Spherical.html#sec-Spherical-10",
  "type": "Theorem",
  "number": "4.6.5",
  "title": "",
  "body": "  For every there is an -Venn diagram with antipodal symmetry.   "
},
{
  "id": "sec-SymmVariant",
  "level": "1",
  "url": "sec-SymmVariant.html",
  "type": "Section",
  "number": "4.7",
  "title": "Variants on Symmetry",
  "body": " Variants on Symmetry  In this section blah blah.   Pseudo-Symmetric Venn Diagrams   Venn diagram monochrome Since symmetric -Venn diagrams only exist for prime , it is natural to wonder what happens if we relax the definition to get other Venn diagrams with some other aspect of symmetry. Consider the various 3-Venn diagrams shown in . Diagrams #3.3, #3.4, #3.5, and #3.6 of Class 2 and Class 3 each have a reflective symmetry about a horizontal or vertical line. On first glance, diagrams #3.1 and #3.2 ( Class 1 ) also appear to have at least one reflective symmetry, but they don't. However, #3.1 and #3.2 do have a reflective symmetry if the color of the curves is ignored . Let us say that a Venn diagram is monochrome if the curves colors are ignored. If a Venn diagram is simple, then there is no loss of information since the curves can be uniquely recovered from the monotone version, but this is not true for non-simple diagrams. E.g., as monochrome Venn diagrams, #3.4 and #3.5 are indistinguishable, as are #3.3 and #3.6. Also worth noting is that if regions are colored by cardinality, then #3.3 and #3.6 remain indistinguishable, unlike #3.4 and #3.5. The above observations suggest that it might be interesting to look at Venn diagrams whose monochrome versions are symmetric, which is what we do below.  Consider the 4-Venn diagram below in . It is not symmetric, but as a monochrome diagram it has a 2-fold rotational symmetry (among other symmetries). That is, a 180 degree rotation of the diagram leaves it invariant if colors are ignored. But there is something deeper happening. Note that the top half of the black curve (1) is mapped by to the bottom half of the blue curve (2), the top half of the blue curve is then mapped to the bottom half of the red curve (3), the top half of the red curve is mapped to the bottom half of the green curve (4), and the top half of the green curve is mapped to the bottom half of the black curve. In other words, if the top half of the diagram is rotated to the bottom half, and then the permutation is applied to the curve labels of the bottom half, then we obtain the full diagram.   A pseudo-symmetric 4-Venn diagram.     The curves of a pseudo-symmetric 4-Venn diagram.           An -Venn diagram has -fold pseudo-symmetry if there is a circular sector making up th of it so that the rest of the diagram can be generated by repeatedly rotating the circular sector and recolouring the curves according to a fixed permutation . We then say the diagram is -pseudo-symmetric .    The diagram shown in is -pseudo-symmetric, and the curves are labelled so that the permutation to be applied is . Just as with ordinary symmetric Venn diagrams, there is a limitation on the values that and .    The permutation in the definition of a -pseudo-symmetric Venn diagram must be circular.    Assume that the permutation is not circular. We will derive a contradiction.      In an -pseudo-symmetric Venn diagram must be prime and must be a power of ; i.e., for some integer .    Imagine the diagram as being divided into equal sized circular sectors. Within each sector each region or partial region is interior to the same number of curves since the curves within successive sectors are just a relabeling by some permutation. Hence the sectors of rank are equi-distributed within the sectors. Thus, for we have that divides . But this divisibilty condition is well-known to imply that is a power of . See, for example, Theorem 13 of [Si] .    Note that the preceeding theorem is also true for -monotone symmetric Venn diagrams.    In an -pseudo-symmetric Venn diagram all curves must be distinct; i.e., no two of the curves are congruent.    TBA.    This idea forms a natural extension of traditionally symmetric Venn diagrams, which can be thought of as being composed of a single pie-slice forming th of the diagram rotated times. Thus, we can generalise this idea to a Venn diagram with two parameters, namely and , and a similar process of generating the rest of the diagram from the pie-slice forming th of the diagram; namely copying the pie-slice and rotating the curve labels.  Ruskey and Weston, in [RW04] , also constructed, by hand, examples of pseudo-symmetric diagrams for the small cases , , and . The next open case is , which is far too large to construct by hand! Details of the method of construction can be found in [We03] ; the authors used a modification of the construction for symmetric -Venn diagrams in [GKS] .        Venn Diagrams and Gray Codes  Stuff about Gray codes.   "
},
{
  "id": "subsec-PseudoSymmetric-2",
  "level": "2",
  "url": "sec-SymmVariant.html#subsec-PseudoSymmetric-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "monochrome "
},
{
  "id": "fig-4vennPseudo",
  "level": "2",
  "url": "sec-SymmVariant.html#fig-4vennPseudo",
  "type": "Figure",
  "number": "4.7.1",
  "title": "",
  "body": " A pseudo-symmetric 4-Venn diagram.   "
},
{
  "id": "fig-4vennPseudoCurves",
  "level": "2",
  "url": "sec-SymmVariant.html#fig-4vennPseudoCurves",
  "type": "Figure",
  "number": "4.7.2",
  "title": "",
  "body": " The curves of a pseudo-symmetric 4-Venn diagram.        "
},
{
  "id": "subsec-PseudoSymmetric-6",
  "level": "2",
  "url": "sec-SymmVariant.html#subsec-PseudoSymmetric-6",
  "type": "Definition",
  "number": "4.7.3",
  "title": "",
  "body": "  An -Venn diagram has -fold pseudo-symmetry if there is a circular sector making up th of it so that the rest of the diagram can be generated by repeatedly rotating the circular sector and recolouring the curves according to a fixed permutation . We then say the diagram is -pseudo-symmetric .   "
},
{
  "id": "subsec-PseudoSymmetric-8",
  "level": "2",
  "url": "sec-SymmVariant.html#subsec-PseudoSymmetric-8",
  "type": "Theorem",
  "number": "4.7.4",
  "title": "",
  "body": "  The permutation in the definition of a -pseudo-symmetric Venn diagram must be circular.    Assume that the permutation is not circular. We will derive a contradiction.   "
},
{
  "id": "subsec-PseudoSymmetric-9",
  "level": "2",
  "url": "sec-SymmVariant.html#subsec-PseudoSymmetric-9",
  "type": "Theorem",
  "number": "4.7.5",
  "title": "",
  "body": "  In an -pseudo-symmetric Venn diagram must be prime and must be a power of ; i.e., for some integer .    Imagine the diagram as being divided into equal sized circular sectors. Within each sector each region or partial region is interior to the same number of curves since the curves within successive sectors are just a relabeling by some permutation. Hence the sectors of rank are equi-distributed within the sectors. Thus, for we have that divides . But this divisibilty condition is well-known to imply that is a power of . See, for example, Theorem 13 of [Si] .   "
},
{
  "id": "subsec-PseudoSymmetric-11",
  "level": "2",
  "url": "sec-SymmVariant.html#subsec-PseudoSymmetric-11",
  "type": "Theorem",
  "number": "4.7.6",
  "title": "",
  "body": "  In an -pseudo-symmetric Venn diagram all curves must be distinct; i.e., no two of the curves are congruent.    TBA.   "
},
{
  "id": "ch-VennSymmetric-10",
  "level": "1",
  "url": "ch-VennSymmetric-10.html",
  "type": "Section",
  "number": "4.8",
  "title": "Extra Diagrams",
  "body": " Extra Diagrams  This section is a placeholder for certain ancillary diagrams that are referred to in other sections in this chapter. The online reader is encouraged to simply ignore this section; in printed book form it might be useful.   Diagrams with 5 curves    Rick Mabry's 5-Venn \"ice cream cone curves\" .    The 5 ellipses rendered as a link. .    The 5 ellipses rendered with equilateral triangles. .    A Tutte embedding of the 5 ellipses. .      Minimum vertex 5-Venn diagram (min5a). .    Minimum vertex 5-Venn diagram (min5b). .    Minimum vertex 5-Venn diagram (min5c). .      Diagrams with 7 curves    A simple non-monotone symmetric 7-Venn diagram. .    Coloured version. .     Adelaide (P1)    Adelaide (P1). .    One curve coloured. .    Rainbow coloured regions. .    Symmetricaly coloured regions. .      Cylindrical representation. .    Edwards image of Adelaide. .      Tutte embedding of Adelaide (P1). .    One curve coloured. .    Rendered as a link. .      Hamilton (P2)    Hamilton (P2). .    One curve coloured. .    Rainbow coloured regions. .    Symmetricaly coloured regions. .      Tutte embedding of Hamilton (P2). .    One curve coloured. .    Rendered as a link. .      Massey (P3)    Massey (P3). .    One curve coloured. .    Rainbow coloured regions. .    Symmetricaly coloured regions. .      Tutte embedding of Massey (P3). .    One curve coloured. .    Rendered as a link. .      Victoria (P4)    Victoria (P4). .    One curve coloured. .    Rainbow coloured regions. .    Symmetricaly coloured regions. .      Tutte embedding of Victoria (P3). .    One curve coloured. .    Rendered as a link. .      Palmerston (P5)    Palmerston (P5). .    One curve coloured. .    Rainbow coloured regions. .    Symmetricaly coloured regions. .      Tutte embedding of Victoria (P3). .    One curve coloured. .    Rendered as a link. .      Manawatu (P5)    Victoria (P6). .    One curve coloured. .    Rainbow coloured regions. .    Symmetricaly coloured regions. .      Tutte embedding of Manawatu (P3). .    One curve coloured. .    Rendered as a link. .      A symmetric 7-Venn diagram who curves are 5-gons.     "
},
{
  "id": "img-MabryIce",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-MabryIce",
  "type": "Figure",
  "number": "4.8.1",
  "title": "",
  "body": " Rick Mabry's 5-Venn \"ice cream cone curves\" .  "
},
{
  "id": "img-GrunEllipseKnot",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-GrunEllipseKnot",
  "type": "Figure",
  "number": "4.8.2",
  "title": "",
  "body": " The 5 ellipses rendered as a link. .  "
},
{
  "id": "img-5-VD-triangles",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-5-VD-triangles",
  "type": "Figure",
  "number": "4.8.3",
  "title": "",
  "body": " The 5 ellipses rendered with equilateral triangles. .  "
},
{
  "id": "img-venn5-tutte",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-venn5-tutte",
  "type": "Figure",
  "number": "4.8.4",
  "title": "",
  "body": " A Tutte embedding of the 5 ellipses. .  "
},
{
  "id": "img-minsymm5a",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-minsymm5a",
  "type": "Figure",
  "number": "4.8.5",
  "title": "",
  "body": " Minimum vertex 5-Venn diagram (min5a). .  "
},
{
  "id": "img-minsymm5b",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-minsymm5b",
  "type": "Figure",
  "number": "4.8.6",
  "title": "",
  "body": " Minimum vertex 5-Venn diagram (min5b). .  "
},
{
  "id": "img-minsymm5c",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-minsymm5c",
  "type": "Figure",
  "number": "4.8.7",
  "title": "",
  "body": " Minimum vertex 5-Venn diagram (min5c). .  "
},
{
  "id": "img-GrunSymm7",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-GrunSymm7",
  "type": "Figure",
  "number": "4.8.8",
  "title": "",
  "body": " A simple non-monotone symmetric 7-Venn diagram. .  "
},
{
  "id": "img-GrunSymm7color",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-GrunSymm7color",
  "type": "Figure",
  "number": "4.8.9",
  "title": "",
  "body": " Coloured version. .  "
},
{
  "id": "img-Adelaide",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-Adelaide",
  "type": "Figure",
  "number": "4.8.10",
  "title": "",
  "body": " Adelaide (P1). .  "
},
{
  "id": "img-AdelaideGreen",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-AdelaideGreen",
  "type": "Figure",
  "number": "4.8.11",
  "title": "",
  "body": " One curve coloured. .  "
},
{
  "id": "img-AdelaideRain",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-AdelaideRain",
  "type": "Figure",
  "number": "4.8.12",
  "title": "",
  "body": " Rainbow coloured regions. .  "
},
{
  "id": "img-AdelaideColor",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-AdelaideColor",
  "type": "Figure",
  "number": "4.8.13",
  "title": "",
  "body": " Symmetricaly coloured regions. .  "
},
{
  "id": "img-AdelaideCylinder",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-AdelaideCylinder",
  "type": "Figure",
  "number": "4.8.14",
  "title": "",
  "body": " Cylindrical representation. .  "
},
{
  "id": "img-AdelaideEdwards",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-AdelaideEdwards",
  "type": "Figure",
  "number": "4.8.15",
  "title": "",
  "body": " Edwards image of Adelaide. .  "
},
{
  "id": "img-TutteAdelaide",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-TutteAdelaide",
  "type": "Figure",
  "number": "4.8.16",
  "title": "",
  "body": " Tutte embedding of Adelaide (P1). .  "
},
{
  "id": "img-TutteAdelaideGreen",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-TutteAdelaideGreen",
  "type": "Figure",
  "number": "4.8.17",
  "title": "",
  "body": " One curve coloured. .  "
},
{
  "id": "img-AdelaideLink",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-AdelaideLink",
  "type": "Figure",
  "number": "4.8.18",
  "title": "",
  "body": " Rendered as a link. .  "
},
{
  "id": "img-Hamilton",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-Hamilton",
  "type": "Figure",
  "number": "4.8.19",
  "title": "",
  "body": " Hamilton (P2). .  "
},
{
  "id": "img-HamiltonGreen",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-HamiltonGreen",
  "type": "Figure",
  "number": "4.8.20",
  "title": "",
  "body": " One curve coloured. .  "
},
{
  "id": "img-HamiltonRain",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-HamiltonRain",
  "type": "Figure",
  "number": "4.8.21",
  "title": "",
  "body": " Rainbow coloured regions. .  "
},
{
  "id": "img-HamiltonColor",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-HamiltonColor",
  "type": "Figure",
  "number": "4.8.22",
  "title": "",
  "body": " Symmetricaly coloured regions. .  "
},
{
  "id": "img-TutteHamilton",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-TutteHamilton",
  "type": "Figure",
  "number": "4.8.23",
  "title": "",
  "body": " Tutte embedding of Hamilton (P2). .  "
},
{
  "id": "img-TutteHamiltonGreen",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-TutteHamiltonGreen",
  "type": "Figure",
  "number": "4.8.24",
  "title": "",
  "body": " One curve coloured. .  "
},
{
  "id": "img-HamiltonLink",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-HamiltonLink",
  "type": "Figure",
  "number": "4.8.25",
  "title": "",
  "body": " Rendered as a link. .  "
},
{
  "id": "img-Massey",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-Massey",
  "type": "Figure",
  "number": "4.8.26",
  "title": "",
  "body": " Massey (P3). .  "
},
{
  "id": "img-MasseyGreen",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-MasseyGreen",
  "type": "Figure",
  "number": "4.8.27",
  "title": "",
  "body": " One curve coloured. .  "
},
{
  "id": "img-MasseyRain",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-MasseyRain",
  "type": "Figure",
  "number": "4.8.28",
  "title": "",
  "body": " Rainbow coloured regions. .  "
},
{
  "id": "img-MasseyColor",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-MasseyColor",
  "type": "Figure",
  "number": "4.8.29",
  "title": "",
  "body": " Symmetricaly coloured regions. .  "
},
{
  "id": "img-TutteMassey",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-TutteMassey",
  "type": "Figure",
  "number": "4.8.30",
  "title": "",
  "body": " Tutte embedding of Massey (P3). .  "
},
{
  "id": "img-TutteMasseyGreen",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-TutteMasseyGreen",
  "type": "Figure",
  "number": "4.8.31",
  "title": "",
  "body": " One curve coloured. .  "
},
{
  "id": "img-MasseyLink",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-MasseyLink",
  "type": "Figure",
  "number": "4.8.32",
  "title": "",
  "body": " Rendered as a link. .  "
},
{
  "id": "img-Victoria",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-Victoria",
  "type": "Figure",
  "number": "4.8.33",
  "title": "",
  "body": " Victoria (P4). .  "
},
{
  "id": "img-VictoriaGreen",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-VictoriaGreen",
  "type": "Figure",
  "number": "4.8.34",
  "title": "",
  "body": " One curve coloured. .  "
},
{
  "id": "img-VictoriaRain",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-VictoriaRain",
  "type": "Figure",
  "number": "4.8.35",
  "title": "",
  "body": " Rainbow coloured regions. .  "
},
{
  "id": "img-VictoriaColor",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-VictoriaColor",
  "type": "Figure",
  "number": "4.8.36",
  "title": "",
  "body": " Symmetricaly coloured regions. .  "
},
{
  "id": "img-TutteVictoria",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-TutteVictoria",
  "type": "Figure",
  "number": "4.8.37",
  "title": "",
  "body": " Tutte embedding of Victoria (P3). .  "
},
{
  "id": "img-TutteVictoriaGreen",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-TutteVictoriaGreen",
  "type": "Figure",
  "number": "4.8.38",
  "title": "",
  "body": " One curve coloured. .  "
},
{
  "id": "img-VictoriaLink",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-VictoriaLink",
  "type": "Figure",
  "number": "4.8.39",
  "title": "",
  "body": " Rendered as a link. .  "
},
{
  "id": "img-Palmerston",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-Palmerston",
  "type": "Figure",
  "number": "4.8.40",
  "title": "",
  "body": " Palmerston (P5). .  "
},
{
  "id": "img-PalmerstonGreen",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-PalmerstonGreen",
  "type": "Figure",
  "number": "4.8.41",
  "title": "",
  "body": " One curve coloured. .  "
},
{
  "id": "img-PalmerstonRain",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-PalmerstonRain",
  "type": "Figure",
  "number": "4.8.42",
  "title": "",
  "body": " Rainbow coloured regions. .  "
},
{
  "id": "img-PalmerstonColor",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-PalmerstonColor",
  "type": "Figure",
  "number": "4.8.43",
  "title": "",
  "body": " Symmetricaly coloured regions. .  "
},
{
  "id": "img-TuttePalmerston",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-TuttePalmerston",
  "type": "Figure",
  "number": "4.8.44",
  "title": "",
  "body": " Tutte embedding of Victoria (P3). .  "
},
{
  "id": "img-TuttePalmerstonGreen",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-TuttePalmerstonGreen",
  "type": "Figure",
  "number": "4.8.45",
  "title": "",
  "body": " One curve coloured. .  "
},
{
  "id": "img-PalmerstonLink",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-PalmerstonLink",
  "type": "Figure",
  "number": "4.8.46",
  "title": "",
  "body": " Rendered as a link. .  "
},
{
  "id": "img-Manawatu",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-Manawatu",
  "type": "Figure",
  "number": "4.8.47",
  "title": "",
  "body": " Victoria (P6). .  "
},
{
  "id": "img-ManawatuGreen",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-ManawatuGreen",
  "type": "Figure",
  "number": "4.8.48",
  "title": "",
  "body": " One curve coloured. .  "
},
{
  "id": "img-ManawatuRain",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-ManawatuRain",
  "type": "Figure",
  "number": "4.8.49",
  "title": "",
  "body": " Rainbow coloured regions. .  "
},
{
  "id": "img-ManawatuColor",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-ManawatuColor",
  "type": "Figure",
  "number": "4.8.50",
  "title": "",
  "body": " Symmetricaly coloured regions. .  "
},
{
  "id": "img-TutteManawatu",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-TutteManawatu",
  "type": "Figure",
  "number": "4.8.51",
  "title": "",
  "body": " Tutte embedding of Manawatu (P3). .  "
},
{
  "id": "img-TutteManawatuGreen",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-TutteManawatuGreen",
  "type": "Figure",
  "number": "4.8.52",
  "title": "",
  "body": " One curve coloured. .  "
},
{
  "id": "img-ManawatuLink",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-ManawatuLink",
  "type": "Figure",
  "number": "4.8.53",
  "title": "",
  "body": " Rendered as a link. .  "
},
{
  "id": "img-scan-venn4",
  "level": "2",
  "url": "ch-VennSymmetric-10.html#img-scan-venn4",
  "type": "Figure",
  "number": "4.8.54",
  "title": "",
  "body": " A symmetric 7-Venn diagram who curves are 5-gons.   "
},
{
  "id": "ch-VennGeometric-3",
  "level": "1",
  "url": "ch-VennGeometric-3.html",
  "type": "Section",
  "number": "5.1",
  "title": "Convexity",
  "body": " Convexity  A Venn diagram is convex if the interior of each of its curves is convex. Note that the regions of a Venn diagram can alway be made convex, for example, by taking the Tutte embedding 11 of the diagram. Grünbaum also defines a stronger notion of convexity by insisting that not only are the curves convex, but also regions and the complement of the external region; we call this condition strong convexity , but it has not been much explored in the literature.  Every monotone Venn diagram is isomorphic to a convex diagram via the following result of Bultena, Grünbaum, and Ruskey [BGR] . A FISC is a family of F initely I ntersecting S imple closed C urves in the plane, with the property that the intersection of the interiors of all the curves is not empty. Clearly, every Venn diagram is a FISC. A FISC is monotone if its directed dual graph has a unique source and a unique sink; this corresponds with our definition of a monotone Venn diagram.    A FISC has a convex drawing in the plane if and only if it is monotone.    It is known (by construction, see, for example, [RRS] , [PS] , [Gr75] , and [BR] ) that there exists a convex -Venn diagram for every positive value of , and thus by the above result there is a monotone one as well.  "
},
{
  "id": "ch-VennGeometric-3-2",
  "level": "2",
  "url": "ch-VennGeometric-3.html#ch-VennGeometric-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "convex strong convexity "
},
{
  "id": "ch-VennGeometric-3-3",
  "level": "2",
  "url": "ch-VennGeometric-3.html#ch-VennGeometric-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "monotone "
},
{
  "id": "thm-monotone",
  "level": "2",
  "url": "ch-VennGeometric-3.html#thm-monotone",
  "type": "Theorem",
  "number": "5.1.1",
  "title": "",
  "body": "  A FISC has a convex drawing in the plane if and only if it is monotone.   "
},
{
  "id": "ch-VennGeometric-4",
  "level": "1",
  "url": "ch-VennGeometric-4.html",
  "type": "Section",
  "number": "5.2",
  "title": "Diagrams made from convex <span class=\"process-math\">\\(k\\)<\/span>-gons",
  "body": " Diagrams made from convex -gons   Introduction BLAH BLAH BLAH.    Bounds on as a function of  Let the term -gon designate any convex polygon with at most sides. Observe that two -gons can (finitely) intersect with each other in at most points; this is not true for non-convex polygons. For the purposes of this discussion we can treat a circle as a 1-gon and an ellipse as a 2-gon. We start off with a lemma first observed by Grünbaum [Gr75] , and discuss its consequences. RELATE THIS TO EARLIER THEOREM.    For a simple -Venn diagram of -gons to exist, .    Given a diagram of -gons, the number of vertices contributed by any two of them can be at most 2 , so the number of vertices is at most . Since the number of vertices in a simple diagram is , the inequality follows.    A slight improvement to this theorem was obtained in [CRW] .    For a simple -Venn diagram of -gons to exist, .    The following table lists implications of as the column with header . The entries with are from a known construction. GRÜNBAUM??   congruent  Bounds on the least for which a simple -Venn diagram can be drawn with -gons.       Notes    3 1   E.g., the 3-circle diagram.     4 2  Doable with ellipses or triangles.    5 2  Many known examples of symmetric and non-symmetric diagrams for ellipses, triangles, etc. Conjectured to not be possible for squares by Grünbaum [Gr92b] .    6 3   Solved for triangles by Carroll [Ca00] . No congruent examples known.     7 4  Grünbaum constructed an independent family (not a Venn diagram) of seven hexagons. Solved for convex symmetric 4-gons (see ) by the authors. No diagram of 7 triangles is possible.    8 6    9 8    10 13       Triangles  Jeremy Carroll, while he was employed at HP Labs (Bristol, England), in [Ca00] solved the problem of finding a collection of six triangles that form a Venn diagram.  There is a simple symmetric 5-Venn diagram in which each curve is a triangle; see , redrawn from Grünbaum [Gr92b] . Grünbaum [Gr84b] asked whether there was a 6-Venn diagram made from triangles. Years later, this question was answered in the affirmative by Jeremy Carroll, while he was employed at HP Labs (Bristol, England), in [Ca00] . His first discovered example is shown below, and like his other diagrams, it is simple. He subsequently discovered that there are exactly 126 different 6-Venn diagrams that can be drawn where each curve is a triangle.   Below is a table of coordinates for the vertices of the six triangles.                                       Below is another nicer example (this jpeg image courtesy of Jeremy Carroll).     Triangles cannot be used to construct a 7-Venn diagram; the proof for the simple case is quite short. A full proof in the non-simple case may be found in [CRW] . Although it follows from , we provide below a proof that there is no simple 7-Venn diagram whose curves are triangles.    A simple Venn diagram of 7 triangles is impossible.    Assume such a diagram exists. By counting the number of vertices, as in Lemma G above, we see that ; thus, every pair of triangles must intersect in six points. Thus for any corner of any triangle , and any other triangle , the point lies outside . Thus lies on the outer face of the diagram, and the other face at is the one inside alone. Since the same argument holds for a second corner of , we have that the non-outer face at is also the non-outer face at , but an edge of separates them. Thus we have a disconnected region, which contradicts the fact that the diagram is a Venn diagram.      -gons for  We note that many constructions for Venn diagrams produce diagrams of -gons where the value is a function of (for examples, see [PS] or [Gr75] ). By the results of [BGR] any convex -FISC (and consequently any monotone -Venn diagram) with points of intersection is drawable with -gons. Venn diagram monotone As a consequence any monotone -Venn diagram can be drawn with -gons. Grünbaum's convex construction [Gr75] is very much like Edwards' general construction, except that the initial circle is replaced by a square and the th curve is a -gon; this gives the upper bounds in the table above. Also, Grünbaum [Gr75, pg.17] states that \"the construction we used ... is a modification to convex polygons of the method described in More [Mo] .\"  In [CRW] Carroll, Ruskey, and Weston proved that there is a symmetric 7-Venn diagram drawn with 4-gons, which meets the lower bound of . See . The coordinates of one of the quadrilaterals is given in the list below. The other 6 quadrilaterals may be obtained from this one by rotating about the origin. The diagram is isomorphic to \"Victoria\".     A symmetric 7-Venn diagram drawn with convex quadrilaterals.     "
},
{
  "id": "ch-VennGeometric-4-3-2",
  "level": "2",
  "url": "ch-VennGeometric-4.html#ch-VennGeometric-4-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "-gon "
},
{
  "id": "ch-VennGeometric-4-3-3",
  "level": "2",
  "url": "ch-VennGeometric-4.html#ch-VennGeometric-4-3-3",
  "type": "Theorem",
  "number": "5.2.1",
  "title": "",
  "body": "  For a simple -Venn diagram of -gons to exist, .    Given a diagram of -gons, the number of vertices contributed by any two of them can be at most 2 , so the number of vertices is at most . Since the number of vertices in a simple diagram is , the inequality follows.   "
},
{
  "id": "thm-CRW",
  "level": "2",
  "url": "ch-VennGeometric-4.html#thm-CRW",
  "type": "Theorem",
  "number": "5.2.2",
  "title": "",
  "body": "  For a simple -Venn diagram of -gons to exist, .   "
},
{
  "id": "tbl-kgons",
  "level": "2",
  "url": "ch-VennGeometric-4.html#tbl-kgons",
  "type": "Table",
  "number": "5.2.3",
  "title": "Bounds on the least <span class=\"process-math\">\\(k\\)<\/span> for which a simple <span class=\"process-math\">\\(n\\)<\/span>-Venn diagram can be drawn with <span class=\"process-math\">\\(k\\)<\/span>-gons.",
  "body": " congruent  Bounds on the least for which a simple -Venn diagram can be drawn with -gons.       Notes    3 1   E.g., the 3-circle diagram.     4 2  Doable with ellipses or triangles.    5 2  Many known examples of symmetric and non-symmetric diagrams for ellipses, triangles, etc. Conjectured to not be possible for squares by Grünbaum [Gr92b] .    6 3   Solved for triangles by Carroll [Ca00] . No congruent examples known.     7 4  Grünbaum constructed an independent family (not a Venn diagram) of seven hexagons. Solved for convex symmetric 4-gons (see ) by the authors. No diagram of 7 triangles is possible.    8 6    9 8    10 13    "
},
{
  "id": "ch-VennGeometric-4-4-10",
  "level": "2",
  "url": "ch-VennGeometric-4.html#ch-VennGeometric-4-4-10",
  "type": "Theorem",
  "number": "5.2.4",
  "title": "",
  "body": "  A simple Venn diagram of 7 triangles is impossible.    Assume such a diagram exists. By counting the number of vertices, as in Lemma G above, we see that ; thus, every pair of triangles must intersect in six points. Thus for any corner of any triangle , and any other triangle , the point lies outside . Thus lies on the outer face of the diagram, and the other face at is the one inside alone. Since the same argument holds for a second corner of , we have that the non-outer face at is also the non-outer face at , but an edge of separates them. Thus we have a disconnected region, which contradicts the fact that the diagram is a Venn diagram.   "
},
{
  "id": "fig-7quad",
  "level": "2",
  "url": "ch-VennGeometric-4.html#fig-7quad",
  "type": "Figure",
  "number": "5.2.5",
  "title": "",
  "body": " A symmetric 7-Venn diagram drawn with convex quadrilaterals.   "
},
{
  "id": "ch-VennGeometric-5",
  "level": "1",
  "url": "ch-VennGeometric-5.html",
  "type": "Section",
  "number": "5.3",
  "title": "Exposure",
  "body": " Exposure  DOES THIS SECTION BELONG ELSEWHERE?   Venn diagram exposed   A Venn diagram is exposed if each of its curves touches the outer face at some point of non-intersection.    Note, for example, that the 3-Venn diagram #3.2 of is not exposed, even though all curves have a point of intersection on the outer face. Stated in terms of -Venn dual graphs, being exposed is the same as the condition that the vertex corresponding to the outer face has degree . Clearly, every symmetric Venn diagram must be exposed. Also, every convex Venn diagram must be exposed ( [Gr92a] ).   curve hidden   A curve in a non-exposed Venn diagram is hidden if it does not touch the outer region.    For example, in Venn's general construction, curves are all hidden. Chilakamarri, Hamburger, and Pippert [CHP96b] gave an example, shown below, of a simple 6-Venn diagram which is not in the same class as any exposed diagram. The hidden curve is the dotted green one.   All simple Venn diagrams with five or less curves are exposed, but with five curves there are 8 (5 reducible, 3 irreducible) that do not have a convex drawing in the plane [HP97] . CLARIFY THIS!  "
},
{
  "id": "def-exposed",
  "level": "2",
  "url": "ch-VennGeometric-5.html#def-exposed",
  "type": "Definition",
  "number": "5.3.1",
  "title": "",
  "body": " Venn diagram exposed   A Venn diagram is exposed if each of its curves touches the outer face at some point of non-intersection.   "
},
{
  "id": "def-hidden",
  "level": "2",
  "url": "ch-VennGeometric-5.html#def-hidden",
  "type": "Definition",
  "number": "5.3.2",
  "title": "",
  "body": " curve hidden   A curve in a non-exposed Venn diagram is hidden if it does not touch the outer region.   "
},
{
  "id": "ch-VennGeometric-6",
  "level": "1",
  "url": "ch-VennGeometric-6.html",
  "type": "Section",
  "number": "5.4",
  "title": "Area-Proportional Diagrams",
  "body": " Area-Proportional Diagrams  Consider the problem of drawing Venn or Euler diagrams so that each region's area is proportional to some weight ( e.g., population or percentage) assigned to that region; these have been referred to as area-proportional diagrams. Such diagrams have an enhanced ability over traditional Venn diagrams to visually convey information about data sets with interacting characteristics.  Frank Ruskey and Stirling Chow, in [ CR03 ], first investigated such diagrams after receiving many requests from readers of the original version of this survey for diagrams with added abilities to represent data sets of different sizes.  The examples below show a) a traditional Venn diagram representing a weighted data set versus b) its corresponding weighted area-proportional version.   For data sets involving two parameters, any data set can be represented by two intersecting circles. That is, but judiciously setting the centers and radii of two circles, the relative areas of the regions can be set to have any set of relative proportions. The only caveat, which holds throughout this section, is that the unbounded region is not taken into consideration.  For three parameters, however, circles do not always suffice, and examples can be constructed fairly easily that cannot be represented by three intersecting circles. The basic problem is that the centers of three circles are determined by three real numbers; center one circle at , one at , and the third at . And the radii are also determined by three numbers, giving a total of 6 numbers. However, there are 7 non-infinite regions in a Venn diagram, so that there are more equations than variables; the system is over-determined.  An alternative is ellipses, but for simplicity of calculation the authors of [CR03] chose to use axis-aligned rectangles to produce orthogonal drawings (in which every edge is either vertical or horizontal). Their algorithm works for all data sets, but sometimes the resulting curves are not convex: it becomes necessary at times to \"bite\" a corner out of a rectangle.  Stirling Chow has a working implementation of this algorithm, and others, online ([ DE ]). For n > 3, the software DrawEuler [ DE ] uses arbitrarily non-convex curves to represent data sets. The problem is still uninvestigated for specific curves.  STIRLING RESULT ABOUT AREA_PROPORTIONAL FISCS  "
},
{
  "id": "sec-MinArea",
  "level": "1",
  "url": "sec-MinArea.html",
  "type": "Section",
  "number": "5.5",
  "title": "Minimum Area Diagrams",
  "body": " Minimum Area Diagrams   Venn diagram polyomino  Venn diagram minimum area  Venn diagram polyVenn On his \"Math Recreations\" website (now defunct), Mark Thompson proposed the novel problem of finding Venn polyominoes ; these are Venn diagrams where each curve is the perimeter of an axis-aligned polyomino in an integer grid. A polyomino is a generalization of a domino whereby the shape is formed by gluing together unit squares along their edges with no holes allowed. When considering Venn polyominoes we need to relax the Venn diagram restriction that curves intersect only finitely. Chow and Ruskey, in [CR05] , used Venn polyominoes to consider the special case of area-proportional diagrams when all regions have the same area, which can be viewed as being a one unit area. For this reason, such Venn polyominoes can be called minimum area Venn diagrams . We will prefer to call them polyVenn diagrams . Thompson found several examples of congruent polyVenn diagrams for up to 4 curves, and Chow and Ruskey found an example for 5 curves; we show some of these in below. Note that only translations of curves are used in (a),(b),(c), but that reflection is used in (d). Congruent polyVenn diagrams are not know for any . congruent    Congruent -polyVenn diagrams for .    Chow and Ruskey [CR05] have also found non-congruent polyVenn diagrams for 6 and for 7 curves. Subsequently, Bultena, Klimesh, and Ruskey [BKR] found a couple of general constructions which we will describe pictorially below. The final \"shape\" of the polyVenn diagram is a rectangle as per the definition below.    A -polyVenn diagram is a polyVenn diagram with curves, each of which is the perimeter of a polyomino, all existing in a rectangular base grid.    A -polyVenn diagram is shown in . Two depictions are shown. In the first, the three polyominoes and their position in the rectangular grid are shown. In the second, each grid square contains the labels of the curve interiors that it intersects. Note also that the empty set occurs as a square within the grid, rather than as the unbounded exterior region.   A -polyVenn diagram.    In we show the smallest polyVenn diagrams, using letter labels to indicate the interior of the curves. Up to relabelling and rotations\/reflections they are unique.   Small polyVenns: (0,0), (0,1), (0,2), (1,1).    The sequence of -polyVenn diagrams does not continue beyond as we prove below.   There is no -polyVenn diagram if .   Label the cells and assume that there is a -polyVenn diagram. The polyominoes are all rectangles. Let . The uncovered cell (the one corresponding to the empty set) must occur at one of the ends, for otherwise two of the rectangles don't intersect; assume that the uncovered cell has label 1. Cells 2 and must be covered by two different polyominoes; however, those two polyominoes intersect in only one cell, which is a contradiction.    We can expand the (1,2)-polyVenn into a (2,3)-polyVenn by the following expansion process. First, double the width and height of the base grid and of each polyomino in the (1,2)-polyVenn as shown in the top row of . Each square cell of the (1,2) grid has become a square in the (2,3) grid. If the two new polyominoes, call them A and B, subdivide each of these squares into the four possible interiors , then the result is the desired (2,3)-polyVenn.   A -polyVenn diagram created by expansion.    In we show another type of expansion, one that goes from (2,3) to (2,5). The first 5 polyominoes are derived from by quadrupling the number of columns, replacing each cell by a row of cells. This ensures that all possible interior\/exterior combinations of those first 5 curves occur, once per each block of cells. The final two polyominoes, call them A and B, have the cover property that all 4 possible interior exterior combinations of A and B occur within each block of cells, and thus that the collection of all 7 curves is a Venn diagram.   A -polyVenn diagram created by expansion.     For , a -polyVenn diagram can be expanded to a -polyVenn diagram.   The main ideas can be generalize from our discussion of . Observe that the pattern and cover property of the final two (blue) polyominoes holds for any positive number of columns that is divisible by 4.     For , a -polyVenn diagram can be expanded to a -polyVenn diagram.   Again, the main ideas can be generalized from the discussion of . However, here it is not so clear how the two non-expanded polyominoes, A and B, generalize. We do this by making use of the progression of polyominoes shown in (or ). To get a particular size, remove the same number of rows from the top and the bottom from a big enough instance. For example, the get the two polyominoes in the second row of , remove the top 2 and bottom 2 rows of cells from the polyominoes in .    Note that the collection of 8 polyominoes in or together with the -polyVenn of form -polyVenn diagrams after each is expanded enough times to make the base grid .   Progression of polyominoes used in the proof of .     Another progression of polyominoes that could be used in the proof of .    We will now argue that and together imply that there are -polyVenn diagrams for all . The (1,1)- and (1,2)-polyVenn diagrams shown in and give us (2,2)- and (2,3)-polyVenn diagrams via , which in turn are the base cases for applying to get all -polyVenn diagrams for . The remaining -polyVenns for are obtained by repeated applications of .  We previously discussed the -polyVenns, which only exist if . What remains to be considered are the -polyVenns where . They exist for and (see and ) and we conjecture that they don't exist if .   A -polyVenn diagram with nice symmetry.     A -polyVenn diagram.    A purist might complain that polyVenn diagrams include the empty set as a cell instead of the unbounded exterior. In certain situations we can modify the constructions discussed above to omit the empty set cell. In [BKR] it is shown how to modify the above construction to prove that if is even, then there is a empty set omitting polyVenn diagram. Other instances where is a composite number are unresolved.  "
},
{
  "id": "sec-MinArea-2",
  "level": "2",
  "url": "sec-MinArea.html#sec-MinArea-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "minimum area Venn diagrams polyVenn diagrams "
},
{
  "id": "fig-polyVenn-congruent",
  "level": "2",
  "url": "sec-MinArea.html#fig-polyVenn-congruent",
  "type": "Figure",
  "number": "5.5.1",
  "title": "",
  "body": " Congruent -polyVenn diagrams for .   "
},
{
  "id": "sec-MinArea-5",
  "level": "2",
  "url": "sec-MinArea.html#sec-MinArea-5",
  "type": "Definition",
  "number": "5.5.2",
  "title": "",
  "body": "  A -polyVenn diagram is a polyVenn diagram with curves, each of which is the perimeter of a polyomino, all existing in a rectangular base grid.   "
},
{
  "id": "fig-Lpoly",
  "level": "2",
  "url": "sec-MinArea.html#fig-Lpoly",
  "type": "Figure",
  "number": "5.5.3",
  "title": "",
  "body": " A -polyVenn diagram.   "
},
{
  "id": "fig-LpolySmall",
  "level": "2",
  "url": "sec-MinArea.html#fig-LpolySmall",
  "type": "Figure",
  "number": "5.5.4",
  "title": "",
  "body": " Small polyVenns: (0,0), (0,1), (0,2), (1,1).   "
},
{
  "id": "sec-MinArea-11",
  "level": "2",
  "url": "sec-MinArea.html#sec-MinArea-11",
  "type": "Theorem",
  "number": "5.5.5",
  "title": "",
  "body": " There is no -polyVenn diagram if .   Label the cells and assume that there is a -polyVenn diagram. The polyominoes are all rectangles. Let . The uncovered cell (the one corresponding to the empty set) must occur at one of the ends, for otherwise two of the rectangles don't intersect; assume that the uncovered cell has label 1. Cells 2 and must be covered by two different polyominoes; however, those two polyominoes intersect in only one cell, which is a contradiction.   "
},
{
  "id": "fig-LpolyExpand",
  "level": "2",
  "url": "sec-MinArea.html#fig-LpolyExpand",
  "type": "Figure",
  "number": "5.5.6",
  "title": "",
  "body": " A -polyVenn diagram created by expansion.   "
},
{
  "id": "fig-LpolyExpandColumn",
  "level": "2",
  "url": "sec-MinArea.html#fig-LpolyExpandColumn",
  "type": "Figure",
  "number": "5.5.7",
  "title": "",
  "body": " A -polyVenn diagram created by expansion.   "
},
{
  "id": "thm-expand02",
  "level": "2",
  "url": "sec-MinArea.html#thm-expand02",
  "type": "Theorem",
  "number": "5.5.8",
  "title": "",
  "body": " For , a -polyVenn diagram can be expanded to a -polyVenn diagram.   The main ideas can be generalize from our discussion of . Observe that the pattern and cover property of the final two (blue) polyominoes holds for any positive number of columns that is divisible by 4.   "
},
{
  "id": "thm-expand11",
  "level": "2",
  "url": "sec-MinArea.html#thm-expand11",
  "type": "Theorem",
  "number": "5.5.9",
  "title": "",
  "body": " For , a -polyVenn diagram can be expanded to a -polyVenn diagram.   Again, the main ideas can be generalized from the discussion of . However, here it is not so clear how the two non-expanded polyominoes, A and B, generalize. We do this by making use of the progression of polyominoes shown in (or ). To get a particular size, remove the same number of rows from the top and the bottom from a big enough instance. For example, the get the two polyominoes in the second row of , remove the top 2 and bottom 2 rows of cells from the polyominoes in .   "
},
{
  "id": "fig-PolyBette",
  "level": "2",
  "url": "sec-MinArea.html#fig-PolyBette",
  "type": "Figure",
  "number": "5.5.10",
  "title": "",
  "body": " Progression of polyominoes used in the proof of .   "
},
{
  "id": "fig-PolyMatt",
  "level": "2",
  "url": "sec-MinArea.html#fig-PolyMatt",
  "type": "Figure",
  "number": "5.5.11",
  "title": "",
  "body": " Another progression of polyominoes that could be used in the proof of .   "
},
{
  "id": "fig-polyVenn13",
  "level": "2",
  "url": "sec-MinArea.html#fig-polyVenn13",
  "type": "Figure",
  "number": "5.5.12",
  "title": "",
  "body": " A -polyVenn diagram with nice symmetry.   "
},
{
  "id": "fig-polyVenn14",
  "level": "2",
  "url": "sec-MinArea.html#fig-polyVenn14",
  "type": "Figure",
  "number": "5.5.13",
  "title": "",
  "body": " A -polyVenn diagram.   "
},
{
  "id": "ch-Extensions-3",
  "level": "1",
  "url": "ch-Extensions-3.html",
  "type": "Section",
  "number": "6.1",
  "title": "<span class=\"process-math\">\\(m\\)<\/span>-fold Venn diagrams",
  "body": " -fold Venn diagrams  In an ordinary Venn diagram each intersection of interiors and exteriors consists of one connected region. Fisher, Koh, and Grünbaum [FGK] define a -fold Venn diagram to be one in which each non-empty intersection consists of exactly connected regions. They show how to construct such diagrams for any . We show a couple of their examples below.   Some symmetric -fold -Venn diagrams    Coiled snakes: A -fold -Venn diagram with mirror image symmetry. Shown with . Other values of may be obtained by twisting\/untwisting the tails.     Rotated F's. A -fold 2-Venn diagram with rotational symmetry. Shown with m = 1. Additional twists of both ends give larger values of .     A -fold 2-Venn diagram with rotational symmetry. Shown with . Additional twists\/untwists of both ends give other values of . Note that the curves passing through the red vertices do not meet transversally (showing that does not apply to -fold Venn diagrams).     "
},
{
  "id": "ch-Extensions-3-3-2",
  "level": "2",
  "url": "ch-Extensions-3.html#ch-Extensions-3-3-2",
  "type": "Figure",
  "number": "6.1.1",
  "title": "",
  "body": " Coiled snakes: A -fold -Venn diagram with mirror image symmetry. Shown with . Other values of may be obtained by twisting\/untwisting the tails.   "
},
{
  "id": "ch-Extensions-3-3-3",
  "level": "2",
  "url": "ch-Extensions-3.html#ch-Extensions-3-3-3",
  "type": "Figure",
  "number": "6.1.2",
  "title": "",
  "body": " Rotated F's. A -fold 2-Venn diagram with rotational symmetry. Shown with m = 1. Additional twists of both ends give larger values of .   "
},
{
  "id": "ch-Extensions-3-3-4",
  "level": "2",
  "url": "ch-Extensions-3.html#ch-Extensions-3-3-4",
  "type": "Figure",
  "number": "6.1.3",
  "title": "",
  "body": " A -fold 2-Venn diagram with rotational symmetry. Shown with . Additional twists\/untwists of both ends give other values of . Note that the curves passing through the red vertices do not meet transversally (showing that does not apply to -fold Venn diagrams).   "
},
{
  "id": "ch-Extensions-4",
  "level": "1",
  "url": "ch-Extensions-4.html",
  "type": "Section",
  "number": "6.2",
  "title": "<span class=\"process-math\">\\(d\\)<\/span>-dimensional Venn Diagrams",
  "body": " -dimensional Venn Diagrams  Independent sets and Venn diagrams can be generalized to more than two dimensions. In the definition of independent set and Venn diagram, \"curve\" gets replaced with \"boundary of an open -cell\" (that is, homeomorphic to a -sphere) and \"region\" is replace with \"open -cell\". Rényi, Rényi, and Surányi [RRS] proved that an independent family of -spheres has at most members, thereby generalizing the result that a Venn diagram whose curves are circles contains at most three curves.  Grünbaum [Gr75] mentions several general geometric problems regarding -dimensional diagrams where the sets are required to be boundaries of -polytopes or convex regions.  "
},
{
  "id": "sec-inf",
  "level": "1",
  "url": "sec-inf.html",
  "type": "Section",
  "number": "6.3",
  "title": "Infinitely intersecting Venn diagrams",
  "body": " Infinitely intersecting Venn diagrams  If we relax the restriction that Venn diagrams meet in only finitely many points, then we lose some of the nice graph theoretic considerations (e.g., the dual graph is no longer a subgraph of the hypercube), but do gain some flexibility. Below we show a diagram made from three congruent curves, red, blue, and green. Each curve is congruent and they are successively rotated by radians about the central point.   Such a construction is possible for any , and is attributed to Peter Shor in Knuth, Graham, and Patashnik [GKP;p.20,633] . An order- (binary) de Bruijn cycle de Bruijn cycle is a circular binary string of length with the property that all substrings of length are distinct, and hence occur exactly once. For example, is a de Bruijn cycle for . A wealth of information about de Bruijn cycles can be found in [Kn4] .  The idea of Shor's construction is to take a De Bruijn cycle of length , together with a regular -gon inscribed in a circle. Make a curve by successively choosing a circular arc for each 1 in and a polygonal edge segment for each 0. To obtain the other curves rotate this one about the central point by radians for . The example shown above is created by starting with the De Bruijn cycle . Thus there is an infinitely intersecting -Venn diagram drawn with congruent curves for any .  We have already seen some other infinitely intersecting diagrams; the Venn polyominoes found in , minimum area diagrams, which also have infinitely intersecting segments of curves.  "
},
{
  "id": "sec-inf-4",
  "level": "2",
  "url": "sec-inf.html#sec-inf-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "de Bruijn cycle "
},
{
  "id": "sec-GenSymm",
  "level": "1",
  "url": "sec-GenSymm.html",
  "type": "Section",
  "number": "6.4",
  "title": "Generalizations of Symmetric diagrams",
  "body": " Generalizations of Symmetric diagrams  In , Variants on Symmetry, we have already discussed a generalization of symmetric Venn diagrams, namely pseudo-symmetric diagrams (which retain the property of being a Venn diagram while relaxing the notion of symmetry). Here we take the opposite tack by retaining the strict definition of symmetry but extend it to non-Venn diagrams. Our motivation is the fact that if is not prime, symmetric Venn diagrams cannot exist.  It is natural to consider diagrams that are \"close\" to Venn diagrams, in that the number of regions is as close to as possible, while still having a -fold rotational symmetry. By definition, Venn diagrams are special instances of independent families, and in [Gr99] , Grünbaum generalized the concept of symmetry in Venn diagrams to symmetry in independent families.   equilateral triangles  A symmetric independent set made with 4 equilateral triangles    If is not prime, there will be some such that regions enclosed by curves must be repeated to create a symmetric diagram, and thus we must have more than regions in any symmetric diagram. Grünbaum gave the lower bound on the number of required regions: where is the number of binary necklaces of length . necklace The numbers are well-studied, see [GKP, pp. 139-141] for explicit formulae and further references; also see , Symmetric Diagrams, Necklaces, and Chains, for some important connections between necklaces and constructing symmetric Venn diagrams. The table below gives for small non-prime values of .   , from [Gr99] , shows a symmetric independent family of four equilateral triangles with regions. We have seen an example of a symmetric independent family of 4 triangles before, in , but this family has 22 regions.  In the same paper Grünbaum conjectured that symmetric independent families with only regions exist for every integer (this includes the special case that is prime, and the symmetric independent family is just a symmetric Venn diagram --- it has no repeated regions).  We can also create a symmetric diagram by removing as few regions as possible from a Venn diagram to create an Euler diagram that is not an independent family (as some regions will be missing) but will retain rotational symmetry - we can call these near-Venn diagrams. Euler diagram near-Venn diagram Symmetric near-Venn diagrams for non-prime are maximally symmetric Euler diagrams in the sense that they cannot have any more regions added without either losing their symmetry or repeating regions. The numbers in the table below are known upper bounds on the number of regions in a symmetric near-Venn diagram (they are not difficult to calculate; see [RW04] for a formula).            4  14  16  18    6  56  64  74    8  242  256  274    9  506  512  524    10  1012  1024  1062    12  4070  4096  4202    As we can see, the numbers and fairly closely bracket . In [Ji] , Zongliang Jiang extended the construction algorithm of [ GKS ] for prime to composite ; this construction repeats the minimum number of regions possible to create symmetric independent families with regions.   A symmetric independent family of 6 curves. The repeated regions are labelled, for example the region enclosed by the black, red and green curves is labelled by a \"4\" and occurs three times.  .   A symmetric independent family of 8 curves that is drawn to be near-simple , that is, as close to simple as possible: there are only 16 points where more than 2 curves intersect.     A near-Venn diagram of 6 curves, drawn to be near-simple.    In addition to examples for small in [Gr99] , many examples of larger symmetric independent families and near-Venn diagrams can be found in [RW04] , [We03] , and [Ji] . The above examples are from [We03] . Grünbaum also noticed, as have we, that, aside from the case , for which a simple diagram can be easily constructed, there do not seem to be any simple symmetric independent families or near-Venn diagrams attaining the given bounds. Why this should be is entirely unknown!  "
},
{
  "id": "fig-4ind",
  "level": "2",
  "url": "sec-GenSymm.html#fig-4ind",
  "type": "Figure",
  "number": "6.4.1",
  "title": "",
  "body": " equilateral triangles  A symmetric independent set made with 4 equilateral triangles   "
},
{
  "id": "sec-GenSymm-8",
  "level": "2",
  "url": "sec-GenSymm.html#sec-GenSymm-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "near-Venn "
},
{
  "id": "sec-GenSymm-11",
  "level": "2",
  "url": "sec-GenSymm.html#sec-GenSymm-11",
  "type": "Figure",
  "number": "6.4.2",
  "title": "",
  "body": " A symmetric independent family of 6 curves. The repeated regions are labelled, for example the region enclosed by the black, red and green curves is labelled by a \"4\" and occurs three times.  . "
},
{
  "id": "sec-GenSymm-12",
  "level": "2",
  "url": "sec-GenSymm.html#sec-GenSymm-12",
  "type": "Figure",
  "number": "6.4.3",
  "title": "",
  "body": " A symmetric independent family of 8 curves that is drawn to be near-simple , that is, as close to simple as possible: there are only 16 points where more than 2 curves intersect.   "
},
{
  "id": "sec-GenSymm-13",
  "level": "2",
  "url": "sec-GenSymm.html#sec-GenSymm-13",
  "type": "Figure",
  "number": "6.4.4",
  "title": "",
  "body": " A near-Venn diagram of 6 curves, drawn to be near-simple.   "
},
{
  "id": "sec-Euler",
  "level": "1",
  "url": "sec-Euler.html",
  "type": "Section",
  "number": "6.5",
  "title": "Euler Diagrams",
  "body": " Euler diagram  Euler Diagrams  Euler diagrams predate Venn diagrams, but are quite distinct. They were introduced by Euler to aid in the understanding of syllogisms. In that context, they have certain deficiencies, some of which Venn tried to rectify with Venn diagrams.  Recall from that an Euler diagram is like a Venn diagram except that intersections of curve interiors are allowed to be empty, although the regions of intersection must still be connected. From this point of view a Venn diagram is a particular type of Euler diagram. If infinite intersections are allowed we refer to the diagrams as iEuler diagrams.  As used in the analysis of syllogisms, each region of a Venn diagram is shaded (in red in the table below) according to whether the region can contain any members. In this way any set system can be represented by a Venn diagram. In an Euler diagram a region is present if and only if it contains at least one member; there is no shading. As a consequence not all set systems may be represented by Euler diagrams; for example the reader can verify that the system cannot be drawn as an Euler diagram (although it can be drawn as an iEuler diagram).  Euler wrote four letters in February of 1761 which contain Euler diagrams as defined above (from the Brewster translation) [Eu] .  LETTER CII. Of the Perfections of a Language. Judgements and Nature of Propositions, affirmative and negative; universal or particular.   LETTER CIII. Of Syllogisms, and their different Forms, when the first Proposition is universal.   LETTER CIV. Different Forms of Syllogisms, whose first Proposition is particular.   LETTER CV. Analysis of some Syllogisms.     Euler always drew his diagrams as collections of circles, but remarks in Letter CIII, These circles, or rather these spaces, for it is of no importance of what figure they are of,... . We know of no written record that Euler ever made use of the familiar 3 circle Venn diagram in the study of syllogisms.  Chapter V of John Venn's book Symbolic Logic contains an explanation and comparison of Venn and Euler diagrams [Ve81] . The second part of his historical notes contains much information about the history of diagrammic reasoning.  Since Venn's time, his diagrams have since been extended to Venn-Pierce diagrams, which add extra information in the form of symbols inside the regions to enable them to be used as valid logical proof mechanisms. The book by Sun-Joo Shin [Sh] contains a clear discussion of the differences between Euler, Venn, and Pierce diagrams, and a proof that with some enhancements the Venn system provides a sound and complete logical representation system.  In the table below we show the corresponding set system, Venn diagram, and Euler diagram for 2-sets. Up to a relabelling of sets, all possibilities are shown (subject to the constraint that they include the empty set).   Comparison of Venn and Euler diagrams for       Set system  Venn diagram  Euler diagram                                    In the Euler diagram for set system is actually an iEuler diagram, there are two overlapping circles, one for and one for . Note also that the Euler diagram for is the entire plane, which is awkward. These are two limitations of Euler diagrams, in addition to the fact mentioned above, that not all set systems can be represented as Euler diagrams. However, this leads to a natural question: what is the complexity of determining whether a given set system is representable at an Euler diagram? One known result is found in the following theorem.  NP-complete problem iEuler diagram  The problem of determining whether a given set system is representable by an iEuler diagram is NP-complete.   This theorem was proven in Stirling Chow's Ph.D. thesis [Ch] via a reduction to a known NP-complete problem, that of determining whether a 3-connected planar graph is Hamiltonian or not. The gadgets used in the reduction would need significant modification to restrict the problem to Euler or simple Euler diagrams.  Another complexity result involving set systems and planar representations was given in Johnson and Pollack [JP] . However, their planar representation are neither Venn or Euler diagrams as we have defined them.  "
},
{
  "id": "sec-Euler-4",
  "level": "2",
  "url": "sec-Euler.html#sec-Euler-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "iEuler "
},
{
  "id": "tbl-VennEuler",
  "level": "2",
  "url": "sec-Euler.html#tbl-VennEuler",
  "type": "Table",
  "number": "6.5.1",
  "title": "Comparison of Venn and Euler diagrams for <span class=\"process-math\">\\(n=2\\)<\/span>",
  "body": " Comparison of Venn and Euler diagrams for       Set system  Venn diagram  Euler diagram                                  "
},
{
  "id": "sec-Euler-13",
  "level": "2",
  "url": "sec-Euler.html#sec-Euler-13",
  "type": "Theorem",
  "number": "6.5.2",
  "title": "",
  "body": "NP-complete problem iEuler diagram  The problem of determining whether a given set system is representable by an iEuler diagram is NP-complete.  "
},
{
  "id": "VD_Book-10-2",
  "level": "1",
  "url": "VD_Book-10-2.html",
  "type": "Section",
  "number": "7.1",
  "title": "Combinatorial and existential problems",
  "body": " Combinatorial and existential problems    There are 11 3-Venn diagrams and 6 3-Venn classes. How many 4-Venn diagrams and 4-Venn classes are there?    Find a simple symmetric 17-Venn diagram. More generally, prove that simple symmetric -Venn diagrams exist for all prime .    Find a simple polar symmetric 11-Venn diagram. The only known simple symmetric 11-Venn diagrams have crosscut symmetry, but there can not exist such a diagram that is also polar symmetric.    Verify that there are 33 simple symmetric non-monotone 7-Venn diagrams.    Prove Winkler's conjecture that every simple  -Venn diagram is extendible to at simple -Venn diagram. Equivalently: Is every planar dual graph of a simple Venn diagram Hamiltonian? Or find a counter example. The conjecture is know to be true for all .    It has been conjectured that all non-simple Venn diagrams are Hamiltonian. Prove or find a counter-example. It is known that all simple Venn diagrams are Hamiltonian; see [PR] .    The dual of a simple Venn diagram is a maximal planar spanning subgraph of the hypercube. Does every maximal spanning subgraph of the hypercube occur as the Venn graph of some Venn diagram? It seems likely that the answer is no. Note that the hypercube is planar for , so a counter-example must have . COUNTER EXAMPLE PROVIDED ALREADY?    Determine the exact number of simple symmetric non-monotone 7-Venn diagrams. It is suspected that the number is 33, but the problem is to provide a proof, either by exhaustive computer search or by mathematical arguments; see .    Find a minimum vertex -Venn diagram for ; such a diagram would have 37 vertices.    What is the least number of intersection points (vertices) in a rigid Venn diagram? There is only one rigid -Venn diagram, the classic simple 3 circle diagram.    "
},
{
  "id": "VD_Book-10-3",
  "level": "1",
  "url": "VD_Book-10-3.html",
  "type": "Section",
  "number": "7.2",
  "title": "Geometric problems",
  "body": " Geometric problems    For every , is there a convex Venn diagram made from congruent curves? If we drop the condition of curves being finitely intersecting, then the answer is yes; see .    There is a rotationally symmetric simple 7-Venn diagram constructed with congruent convex quadrilaterals, as shown in . It is equivalent to the diagram \"Victoria\". Can any of the other 23 symmetric simple 7-Venn diagram be constructed with congruent convex quadrilaterals? If not, what about congruent non-convex quadrilaterals?    Over all -Venn diagrams, which requires the greatest number of straight line segments to draw it? ELABORATE.     polyVenn diagrams  See for background material on polyVenn diagrams.     Venn diagram minimum area congruent Find a minimum area -polyVenn diagram made from congruent polyominoes for . For , find a polyVenn diagram made from congruent polyominoes but without allowing reflection. Or prove that no such diagrams exists. It seems likely that there is some large enough for which congruent polyomino minimum area Venn diagrams cease to exist.     Mersenne prime Find examples of -polyVenn diagrams with no cell representing the empty set, and existing in a rectangular grid. Thus and , so can't be a Mersenne prime. These diagrams are known to exist for if , but not otherwise. The first few open cases are      "
},
{
  "id": "VD_Book-10-4",
  "level": "1",
  "url": "VD_Book-10-4.html",
  "type": "Section",
  "number": "7.3",
  "title": "Generalizations of Venn diagrams",
  "body": " Generalizations of Venn diagrams   Euler Diagrams  For every integer there exists a symmetric independent family of curves with only regions. See for the formula for . This conjecture is due to Grünbaum is true for prime by the results of .  If integer is not a prime, every symmetric independent family with regions is non-simple. See for the formula for . This conjecture is due to Grünbaum [Gr99,pg.6] , and is false for prime by the results of . It is known to be true for by the results of [Ji] .  See for background material on Euler diagrams.    Given an arbitrary set system , give a polytime algorithm to determine if is representable by an Euler diagram, or prove that the problem is NP-complete.    Given an arbitrary set system , give a polytime algorithm to determine if is representable by a simple Euler diagram, or prove that the problem is NP-complete.     "
},
{
  "id": "ch-VennRefs-3",
  "level": "1",
  "url": "ch-VennRefs-3.html",
  "type": "Section",
  "number": "8.1",
  "title": "Print References",
  "body": " Print References   [AC] Daniel E. Anderson and Frank L. Cleaver, Venn-type diagrams for arguments of terms, J. Symbolic Logic, 30 (1965) 113-118.  [An] J. Anusiak, On Set-theoretically Independent Collections of Balls, Colloquium Mathematicum, 13 (1965) 223-233.  [Au] A.K. Austin. Problem E2314. American Mathematical Monthly, 78 (8):904, 1971. Solution by H. Harborth, Ibid. 79(8):907-908, 1972.  [Bak] M. J. C. Baker, All swans are white: some remarks on the diagrams of Euler and Venn, Australian Math. Soc. Gaz., 17 (1990) 161-167.  [Bar] Margaret E. Baron, A note on the historical development of logic diagrams: Leibniz, Euler, and Venn, Mathematical Gazette, 53 (1969) 113-125.  [Be] E. C. Berkeley, Boolean algebra (the technique for manipulating \"and\", \"or\", \"not\" and conditions) and applications to insurance, The Record, American Institute of Actuaries, 26 (1937) 373-414. [According to [Grün75] , this paper contains a general Venn diagram construction].   [Boy] A. V. Boyd, Venn diagram of rectangles, Mathematics Magazine, 58 (1985) 251.  [Bow] L. J. Bowles, Logic diagrams for up to classes, Mathematical Gazette, 55 (1971) 370-373.  [Bu] Bette Bultena, Face-balanced, Venn and polyVenn diagrams Ph.D. thesis, University of Victoria, Department of Computer Science, 2014, http:\/\/hdl.handle.net\/1828\/4873.  [BR] Bette Bultena and Frank Ruskey, Venn Diagrams with Few Vertices, Electronic Journal of Combinatorics, Volume 5, #R44, (1998).  [BGR] Bette Bultena, Branko Grünbaum, and Frank Ruskey, Convex Drawings of Intersecting Families of Simple Closed Curves, 11th Canadian Conference on Computational Geometry, (1999) 18-21.  [BKR] B. Bultena, M. Klimesh, and F. Ruskey, Minimum Area Polyomino Venn Diagrams, Journal of Computational Geometry, (3)1 (2012) 154-167.  [Ca] Tao Cao, Computing all the simple symmetric monotone Venn diagrams on seven curves, Master's thesis, University of Victoria (2001).  [CMR] Tao Cao, Khalegh Mamakani, and Frank Ruskey, Symmetric Monotone Venn Diagrams with Seven Curves, LNCS 6099, (2010) 331-342.  [Ca99] J. Carroll, personal communication, December 1999.  [Ca00] J. Carroll, Drawing Venn triangles, Technical Report HPL-2000-73, HP Labs (2000).  [Ca05] J. Carroll, personal communication, May 2005.  [CHP95] K. B. Chilakamarri, P. Hamburger, and R. E. Pippert, Venn diagrams: announcement of some new results, Geombinatorics, 4 (1995) 129-137.  [CHP96a] K. B. Chilakamarri, P. Hamburger, and R. E. Pippert, Hamilton Cycles in Planar Graphs and Venn Diagrams, Journal of Combinatorial Theory (Series B), 67 (1996) 296-303.  [CHP96b] Kiran B. Chilakamarri, Peter Hamburger and Raymond E. Pippert, Venn diagrams and planar graphs, Geometriae Dedicata, 62 (1996) 73-91.  [CHP00] Kiran B. Chilakamarri, Peter Hamburger and Raymond E. Pippert, Analysis of Venn diagrams using cycles in graphs, Geometriae Dedicata, 82 (2000) 193-223.  [Ch] S. Chow, Generating and Drawing Area-Proportional Euler and Venn Diagrams, Ph.D. Thesis, University of Victoria, 2007.  [CR98] S. Chow and F. Ruskey, Searching for symmetric Venn diagrams, extended abstract, (1998).  [CR03] S. Chow and F. Ruskey, Drawing Area-Proportional Venn and Euler Diagrams, 11th International Symposium on Graph Drawing, Perugia, Italy, Lecture Notes in Computer Science, 2912 (2003) 466-477.  [CR05] S. Chow and F. Ruskey, Drawing minimum area Venn diagrams using polyominoes, Mathematics Magazine, Volume 80, No. 2, April 2007, pp. 91-103.  [CRW] J. Carroll, F. Ruskey, and M. Weston, Which -Venn diagrams can be drawn with convex -gons?, Discrete and Computational Geometry, 37 (2007) 619-628.  [Ci03] Barry Cipra, Diagram masters cry 'Venn-i, Vidi, Vici', Science, 299 (January 2003) 651.  [Ci04] Barry Cipra, Venn Meets Boole in Symmetric Proof, SIAM News, 37 no. 1 (January\/February 2004).  [Cl] Clewlow, Michelle, Intersecting Sets: John Venn, Church and University, 1834-1923. PhD thesis, 2007, The Open University.  [Ed89a] Anthony W. F. Edwards, Venn diagrams for many sets, Bulletin of the International Statistical Institute, 47th Session, Paris (1989). Contributed papers, Book 1, 311-312.  [Ed89b] Anthony W. F. Edwards, Venn diagrams for many sets, New Scientist, 7 (January 1989) 51-56.  [Ed92] Anthony W. F. Edwards, Rotatable Venn Diagrams, Mathematics Review, 2 (February 1992) 19-21.  [Ed96] Anthony W. F. Edwards, Seven-set Venn diagrams with rotational and polar symmetry, Combinatorics, Probability, and Computing, 7 (1998) 149-152.  [Ed04] Anthony W. F. Edwards, Cogwheels of the Mind: The Story of Venn Diagrams, The John Hopkins University Press, Baltimore, Maryland (2004).  [EE] Anthony W. F. Edwards and J. H. Edwards, Metrical Venn diagrams, Annals of Human Genetics 56 (1992), 71-75. Also reprinted in Cogwheels of the Mind ([Ed04]).  [ES] Anthony W. F. Edwards and C. A. B. Smith, New 3-set Venn diagram, Nature, (Scientific Correspondence), 339 (1989) 263.  [Eu] Leonard Euler, Lettres à une Princesse d'Allemagne, St. Petersburg, (1768). (Translated by Sir David Brewster, Edinburgh, W & C Tait, and Longman et al., 1823, Vol. 1. See in particular letters CII - CVIII on pages 337-366.)   [FGK] J. Chris Fisher, Branko Grünbaum, and E. L. Koh, Diagrams Venn and How, Mathematics Magazine, 61 (1988) 36-40.  [Ga] Martin Gardner, Logic, Machines, and Diagrams, McGraw-Hill, New York, (1958).  [GHKT] Joseph (Yossi) Gil, John Howse, Stuart Kent, and John Taylor, Projections in Venn-Euler Diagrams, in Proc. IEEE Symposium on Visual Languages, Seattle, Washington (2000) 119-126.  [Gl] Andrew Glassner, Venn and Now, IEEE Computer Graphics and Applications, Volume 23 (no. 4), (July\/August 2003), 82-95.  [GKP] Ronald Graham, Donald Knuth, and Oren Patashnik, Concrete Mathematics, Addison-Wesley, (1989). [Exercises about Venn diagrams (1.5 and 1.22) may be found on pages 17 and 20, with corresponding solutions on pages 483 and 486.]   [GKS] Jerrold Griggs, Charles E. Killian and Carla D. Savage, Venn Diagrams and Symmetric Chain Decompositions in the Boolean Lattice, Electronic Journal of Combinatorics, Volume 11 (no. 1), #R2, (2004).  [Gr75] Branko Grünbaum, Venn diagrams and Independent Families of Sets, Mathematics Magazine, 48 (Jan-Feb 1975) 12-23. [Grünbaum awarded the MAA Lester R. Ford prize for this paper in 1976 (see AMM, Aug-Sept. 1976, pg. 587).]   [Gr84a] Branko Grünbaum, The Construction of Venn Diagrams , The College Mathematics Journal, Vol. 15 No. 3 (1984) 238-247.  [Gr84b] Branko Grünbaum, On Venn Diagrams and the Counting of Regions, The College Mathematics Journal, Vol. 15 No. 5 (1984) 433-435.  [Gr92a] Branko Grünbaum, Venn Diagrams I, Geombinatorics, Volume I, Issue 4, (1992) 5-12.  [Gr92b] Branko Grünbaum, Venn Diagrams II, Geombinatorics, Volume II, Issue 2, (1992) 25-32.  [Gr99] Branko Grünbaum, The Search for Symmetric Venn Diagrams, Geombinatorics, 8 (1999) 104-109.  [GW] Branko Grünbaum and Peter Winkler, A Simple Venn Diagram of Five Triangles, Mathematics Magazine, 55 no. 5 (1982) 311.  [GLT] A. Gyárfás, J. Lehel, and Zs. Tuza, The structure of rectangle families dividing the plane into maximum number of atoms, Discrete Math. 52 (1984) 177-198. (MR 86g:05025)  [Ha98a] Peter Hamburger, Constructing Venn diagrams using graphs, Matematikai Lapok, 4 (1994) no. 2-3 (1998) 1-70. In Hungarian, with English summary.  [Ha98b] Peter Hamburger, A Graph-Theoretic Approach to Geometry, manuscript, 1998.  [Ha02] Peter Hamburger, Doodles and doilies, non-simple symmetric Venn diagrams, Discrete Math., a Special Issue in Honor of the 65th Birthday of Daniel J. Kleitman, (2-3) 257 (2002) 423-439.  [Ha02b] Peter Hamburger, Pretty drawings. More doodles and doilies, symmetric Venn diagrams, manuscript, (2002). [A shorter version (33 pages) will appear in Utilitas Mathematica]  [HH] Peter Hamburger and Edit Hepp, Symmetric Venn diagrams in the Plane: The Art of Assigning a Binary Bit String Code to Planar Regions Using Curves, Leonardo, MIT Press, (2005) 38 (2): 125-132.  [HPS] P. Hamburger, Gy. Petruska, and A. Sali, Saturated chain partitions in ranked partially ordered sets, and non-monotone symmetric 11-Venn diagrams, Studia Sci. Math. Hungar. 41 (2004) 147-191.  [HP97] P. Hamburger and R. E. Pippert, Simple, reducible Venn diagrams on five curves and Hamiltonian cycles, Geometriae Dedicata, (no. 3) 68 (1997) 245-262.  [HP00] P. Hamburger and R. E. Pippert, Venn said it couldn't be done, Mathematics Magazine, Vol. 73 No. 2 (April 2000) 105-110 .  [HP03] P. Hamburger and R. E. Pippert, A symmetrical beauty. A non-simple 7-Venn diagram with a minimum vertex set, Ars Combin. 66 (2003) 129-137.  [HS03] P. Hamburger and A. Sali, Symmetric 11-Venn diagrams with vertex sets 231, 242, ..., 352, Studia Sci. Math. Hungar., (1-2) 40 (2003) 121-143.  [HS04] P. Hamburger and A. Sali, 11-Doilies with vertex sets 275, 286, ..., 462, AKCE International Journal of Graphs and Combinatorics, 1 (2004) 109-133.  [He] D. W. Henderson, Venn diagrams for more than four classes, American Mathematical Monthly, 70 (1963) 424-426.  [Hu] M. Humphries, Venn diagrams using convex sets, Mathematical Gazette, 71 (1987) 59.  [Ji] Zongliang Jiang, Symmetric chain decompositions and independent families of curves, Master's thesis, Department of Computer Science, North Carolina State University, (2003).  [JP] D.S. Johnson and H.O. Pollack, Hypergraph Planarity and the Complexity of Drawing Venn Diagrams, Journal of Graph Theory, Vol. 3 No. 11 (1987) 309-325. [Earlier version appears in Colloquium on the Theory of Algorithms, North-Holland, 1985.]   [KRSW] Charles E. Killian, Frank Ruskey, Carla D. Savage, and Mark Weston, Half-Simple Symmetric Venn Diagrams, Electronic Journal of Combinatorics, Volume 11 (no. 1), #R86, (2004).  [LL] D.K.J. Lin and A.W. Lam, Connections Between Two-Level Factorials and Venn Diagrams , The American Statistician, 51 (1997) 49-51.  [MC] Arnaud Maes and Corinne Cerf, A family of Brunnian links based on Edwards' construction of Venn diagrams, J. Knot Theory Ramifications, 10 no. 1, (2001) 97-107.  [MMR11] K. Mamakani, W. Myrvold and F. Ruskey, Generating all Simple Convexly-drawable Polar Symmetric 6-Venn Diagrams, International Workshop on Combinatorial Algorithms, Victoria, 2011. LNCS, 7056, 275-286.  [MMR12] K. Mamakani, W. Myrvold and F. Ruskey, Generating Simple Convex Venn Diagrams, Journal of Discrete Algorithms, 16 (2012) 270-286.  [MR12] K. Mamakani and F. Ruskey, Simple Spherical Venn diagrams with Isometry Groups of Order Eight, 2012, manuscript.  [MR14] K. Mamakani and F. Ruskey, New Roses: Simple Symmetric Venn Diagrams with 11 and 13 Curves, Discrete and Computational Geometry, 52 (2014) 71-87.  [Mo] Trenchard More, Jr. On the construction of Venn diagrams, J. Symbolic Logic, 24 (1959) 303-304.  [No] P. Nowicki, Koniczynko -listna, [In Polish], Wiadom. Mat., 19 (1975) 11-18.  [Pa] Lewis Pakula, A note on Venn diagrams, American Mathematical Monthly, 96 (1989) 38-39. (MR 89k:51040)  [PS] Vern S. Poythress and Hugo S. Sun, A method to construct convex, connected Venn diagrams for any finite number of sets, The Pentagon, 31 (Spring 1972) 80-83.  [PR] Gara Pruesse and Frank Ruskey, All Simple Venn Diagrams are Hamiltonian, arXiv:1504.06651 [math.CO], (Apr 2015) 7 pages.  [RRS] A. Rényi, V. Rényi, and J. Surányi, Sur l'indépendance des domaines simples dans l'Espace Euclidien a n dimensions, Colloquium Mathematicum, 2 (1951) 130-135. [Some erroneous statements made in this paper are corrected in [Gr75] ]   Note  Some erroneous statements made in this paper are corrected in [Gr75] .    [RW97] Frank Ruskey and Mark Weston, A Survey of Venn Diagrams, Electronic Journal of Combinatorics, DS#5, 1997, revised 2001 and 2005, ( url ).  [RW04] Frank Ruskey and Mark Weston, More fun with symmetric Venn diagrams, in Proceedings of Third International Conference on FUN with Algorithms, ed. P. Ferragina and R. Grossi, Tuscany, Italy, (2004), 235-246. [To appear in Theory of Computing Systems]  [RW11] F. Ruskey and M. Weston, Spherical Venn Diagrams with Involutory Isometries, Electronic Journal of Combinatorics, 18 (2011) #P191, 14 pages ( url ).  [RSW] F. Ruskey, Carla D. Savage, and Stan Wagon, The Search for Simple Symmetric Venn Diagrams, Notices of the American Mathematical Society, December 2006, pages 1304-1311.  [Sc] A. J. Schwenk, Venn diagram for five sets, Mathematics Magazine, 57 (1984) 297.  [Sh] Sun-Joo Shin, The logical status of diagrams, Cambridge University Press, (1994). (MR 95j:03014)  [Ve80] J. Venn, On the diagrammatic and mechanical representation of propositions and reasonings, The London, Edinburgh, and Dublin Philosophical Magazine and Journal of Science, 9 (1880) 1-18.  [Ve81] J. Venn, Symbolic Logic, MacMillan, London 1881, 2nd ed., (1894). Reprinted by Lenox Hill Pub. & Dist. Co. (Burt Franklin), 1971 (S.B.N. 8337-36264).  Wagon, S., Webb, P. (2008). Venn Symmetry and Prime Numbers: A Seductive Proof Revisited. The American Mathematical Monthly, 115(7), 645–648. https:\/\/doi.org\/10.1080\/00029890.2008.11920574  [Weg] B. Weglorz, Nerves and Set-theoretical Independence, Colloquium Mathimaticum, 13 (1964) 17-19.  [We03] Mark Weston, On symmetry in Venn diagrams and independent families, Master's thesis, University of Victoria, (2003).  [We09] Mark Weston, Symmetries of Venn Diagrams on the sphere, Ph.D. thesis, University of Victoria, (2009).  [Wi] Peter Winkler, Venn diagrams: Some observations and an open problem, Congressus Numerantium, 45 (1984) 267-274.  "
},
{
  "id": "ch-VennRefs-4",
  "level": "1",
  "url": "ch-VennRefs-4.html",
  "type": "Section",
  "number": "8.2",
  "title": "Other References (not about Venn diagrams per se)",
  "body": " Other References (not about Venn diagrams per se)  [BTK] N.G. de Bruijn, C. van Ebbenhorst Tengbergen, and D. Kruyswijk, On the set of divisors of a number, Nieuw Arch. Wisk. (2) 23 191-193 (1952).  [Kn] D. Knuth, The Art of Computer Programming: Volume 4A, Combinatorial Algorithms, Addison-Wesley, 2011.  [GK] Curtis Greene and Daniel J. Kleitman, Strong versions of Sperner's theorem, J. Combinatorial Theory Ser. A, 20 (1) (1976) 80-88.  [Kn4] D.E. Knuth, The Art of Computer Programming, Volume 4A, Combinatorial Algorithms, Part 1, Addison-Wesley, 2011.  [NW] A. Nijenhuis and H. S. Wilf, Combinatorial Algorithms, 2nd. ed., Academic Press, New York, London, 1978.  [Or] O. Ore, The Four-Color Problem, Academic Press, New York, London, 1967.  [Si] D. Singmaster, Divisibility of binomial and multinomial coefficients by primes and prime powers. In A collection of manuscripts related to the Fibonacci sequence, pages 98–113. Fibonacci Assoc., Santa Clara, Calif., 1980.  [St] Ian Stewart, Game, Set, and Math, Basil Blackwell, 1989.  [Tu] W. Tutte, A theorem on planar graphs, Transactions of the AMS, 82 (1956) 183-116.  [Wh] H. Whitney, A Theorem on Graphs, Annals of Math., 32 (1931) 378-390.  "
},
{
  "id": "ch-VennRefs-5",
  "level": "1",
  "url": "ch-VennRefs-5.html",
  "type": "Section",
  "number": "8.3",
  "title": "Electronic References",
  "body": " Electronic References  The following references are online and may disappear or change over time. The external sites listed below are not endorsed by The Electronic Journal of Combinatorics and do not form part of this article.   [MAC] The MacTutor site contains a biography of John Venn .  [KP] Robert Scharein's KnotPlot site . All figures with knots on this site were produced with KnotPlot.  [SJ] Slavik Jablan's page \"Are Borromean Links so Rare?\"   [GC] The Geometry Center at the University of Minnesota.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
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
