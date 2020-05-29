#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() 
{
	
    char s[100];
    scanf("%[^\n]%*c", &s);
  	char x[] = "Hello, World!";
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */   
    printf ("%s\n", x);
    printf ("%s", s);
    return 0;
}
