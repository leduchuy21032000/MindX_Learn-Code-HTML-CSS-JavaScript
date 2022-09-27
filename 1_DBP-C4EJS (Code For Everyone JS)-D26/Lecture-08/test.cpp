#include <stdio.h>
#include <iostream> 
using namespace std;

void A() {
    cout << "From A with love" << endl;
}

void B(void callback()) {
    cout << "From B with love" << endl;
    A();
}

int main() {
    B(A);
}