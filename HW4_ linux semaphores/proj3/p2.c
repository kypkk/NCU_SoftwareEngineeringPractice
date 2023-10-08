/*
    109201521 資工四 彭康彧
*/
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

       P(sem2);
       P(sem2);

       printf("P222222222 is here\n"); i++ ;

       V(sem3);
       V(sem3);

       // *** this is where you should place semaphore
   
    }  while (i < 100);
}