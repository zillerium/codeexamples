#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() 
{

    /* Enter your code here. Read input from STDIN. Print output to STDOUT */ 
    char ch;
    scanf("%c", &ch);
    
    char s[100];
    scanf("\n");
    scanf("%[^\n]%*c", &s);
    char sen[100];
    scanf("\n");
    scanf("%[^\n]%*c", &sen);
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */   
    printf("%c\n", ch);
    printf ("%s\n", s);
    printf ("%s", sen);

    return 0;
}
