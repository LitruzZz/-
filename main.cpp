#include <iostream>
#include <cmath>

using namespace std;

double y(double x, int n) {
    return pow(x, n) + sin(x); 
}

void readInput(double &start, double &end, double &step, int &n) {
    cout << "Введіть початок інтервалу: ";
    cin >> start;
    cout << "Введіть кінець інтервалу: ";
    cin >> end;
    cout << "Введіть крок збільшення аргументу: ";
    cin >> step;
    cout << "Введіть значення n: ";
    cin >> n;
}

// Головна функція
int main() {
    double start, end, step;
    int n;
    
    readInput(start, end, step, n);
    
    cout << "\nРезультати обчислення:\n";
    for (double x = start; x <= end; x += step) {
        cout << "y(" << x << ", " << n << ") = " << y(x, n) << endl;
    }
    
    return 0;
}