#import <Foundation/Foundation.h>

@interface Adder : NSObject {
   NSInteger total;
}

- (id)initWithInitialNumber:(NSInteger)initialNumber;
- (void)addNumber:(NSInteger)newNumber;
- (NSInteger)getTotal;

@end

@implementation Adder
-(id)initWithInitialNumber:(NSInteger)initialNumber {
   total = initialNumber;
   return self;
}

- (void)addNumber:(NSInteger)newNumber {
   total = total + newNumber;
}

- (NSInteger)getTotal {
   return total;
}

@end

int main(int argc, const char * argv[]) {
   NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];        
   Adder *adder = [[Adder alloc]initWithInitialNumber:10];
   [adder addNumber:5];
   [adder addNumber:4];
   
   NSLog(@"The total is %ld",[adder getTotal]);
   [pool drain];
   return 0;
}
