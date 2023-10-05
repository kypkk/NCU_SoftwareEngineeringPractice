#include <stdio.h>
#include "awk_sem.h"

main() {
    int i = 0 ;
    // *** please insert proper semaphore initialization here
    int sem1 = get_sem(".", 'A');
    int sem2 = get_sem(".", 'B');
    int sem3 = get_sem(".", 'C');
    do {
        // *** this is where you should place semaphore 

       V(sem1);
       V(sem2);

       P(sem3);

       printf("P3333333 is here\n"); i++ ;
       
       // *** this is where you should place semaphore
   
    }  while (i< 200);
}