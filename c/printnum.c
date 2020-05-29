#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main()
{
	int i0=0;
    int i1=0;
    float f0=0;
    float f1=0;
    scanf("%d %d", &i0, &i1);
    scanf("\n");
    scanf("%f %f", &f0, &f1);

    printf("%d %d\n", (i0+i1), (i0-i1));
    printf("%.1f %.1f\n", (f0+f1), (f0-f1));

    return 0;
}
