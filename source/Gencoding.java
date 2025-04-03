// Utility for comparing G-encoding and Grunbaum encodeing

import java.util.*;

class Gencoding {

static void printIt( int[] X ) {
   for (int j=0; j<X.length; ++j) System.out.print( X[j]+" " );
   System.out.println();
}

public static void main ( String[] args ) {

   Scanner in = new Scanner( System.in );
   
   int[] A = new int[17];
   
   for (int j=0; j<17; ++j) {
      for (int k=0; k<36; ++k) {
         A[k] = in.nextInt();
         B[k] = n - A[37-k];
      }
      printIt( A );
      printIt( B );

   }
   
 
}

}
