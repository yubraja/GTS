#include <WiFi.h>


const char* ssid="srijeshn_2.4";
const char* password="CLB27622A2";



void setup() {

  Serial.begin(115200);
  delay(1000);


  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid,password);
  Serial.println("\n Connecting");


  while(WiFi.status()!= WL_CONNECTED){
    Serial.print(".");
    delay(100);
  }

    Serial.println("\nConnected to the WiFi network");
    Serial.print("Local ESP32 IP: ");
    Serial.println(WiFi.localIP());
}

void loop() {
  // put your main code here, to run repeatedly:

}
