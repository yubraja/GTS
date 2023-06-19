


#include <Wire.h>
#include <WiFi.h>

#define echoPin 2
#define trigPin 4

const char* ssid="srijeshn_2.4";
const char* password="CLB27622A2";

long duration , distance;

 




void setup() {

  Serial.begin(9600);
  pinMode(trigPin, OUTPUT);
  
  pinMode(echoPin, INPUT);

  delay(1000);

  WiFi.mode(WIFI_STA); //Optional
  WiFi.begin(ssid, password);
  Serial.println("\nConnecting");
  while(WiFi.status() != WL_CONNECTED){
      Serial.print(".");
      delay(100);
  }
  Serial.println("\nConnected to the WiFi network");
  Serial.print("Local ESP32 IP: ");
  Serial.println(WiFi.localIP());

}

void loop() {



  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin,HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin,LOW);



  duration=pulseIn(echoPin,HIGH);
  distance= duration/58.2;
  String disp=String(distance);
  

  Serial.print("Distance: ");
  Serial.print(disp);
  Serial.println(" cm");
  delay(1000);

}
