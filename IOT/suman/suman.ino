#if defined(ESP32)
#include <WiFi.h>
#include <FirebaseESP32.h>
#elif defined(ESP8266)
#include <ESP8266WiFi.h>
#include <FirebaseESP8266.h>
#endif

//Provide the token generation process info.
#include <addons/TokenHelper.h>

//Provide the RTDB payload printing info and other helper functions.
#include <addons/RTDBHelper.h>

/* 1. Define the WiFi credentials */
#define WIFI_SSID "Ncitcollege"
#define WIFI_PASSWORD "Ncit@123"

#define echoPin 2
#define trigPin 4

//For the following credentials, see examples/Authentications/SignInAsUser/EmailPassword/EmailPassword.ino

/* 2. Define the API Key */
#define API_KEY "AIzaSyDVsYuTgIBE7sZKaXkU2QPFa-eb7SKk5Rw"

/* 3. Define the RTDB URL */
#define DATABASE_URL "https://iotdevice-35c41-default-rtdb.firebaseio.com" //<databaseName>.firebaseio.com or <databaseName>.<region>.firebasedatabase.app


//Define Firebase Data object
FirebaseData fbdo;

FirebaseAuth auth;
FirebaseConfig config;

long duration , distance;



void setup()
{

  Serial.begin(9600);
  pinMode(trigPin, OUTPUT);
  
  pinMode(echoPin, INPUT);

  delay(1000);
 WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(300);
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();



  Serial.printf("Firebase Client v%s\n\n", FIREBASE_CLIENT_VERSION);

  /* Assign the api key (required) */
  config.api_key = API_KEY;

  config.database_url = DATABASE_URL;



  //////////////////////////////////////////////////////////////////////////////////////////////
  //Please make sure the device free Heap is not lower than 80 k for ESP32 and 10 k for ESP8266,
  //otherwise the SSL connection will fail.
  //////////////////////////////////////////////////////////////////////////////////////////////

  Firebase.begin(DATABASE_URL, API_KEY);

  //Comment or pass false value when WiFi reconnection will control by your code or third party library
 // Firebase.reconnectWiFi(true);

  Firebase.setDoubleDigits(5);

}

void loop()
{
 
  

  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin,HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin,LOW);



  duration=pulseIn(echoPin,HIGH);
  distance= duration/58.2;
  String disp=String(distance);
  

  // Serial.print("Distance: ");
  // Serial.print(disp);
  // Serial.println(" cm");
  delay(1000);

    
  if (Firebase.ready()) 
  {
    
    Firebase.setInt(fbdo, "/ultrasonicSensors/distance", distance);
    delay(200);

    Serial.printf("Get int distance--  %s\n", Firebase.getInt(fbdo, "/ultrasonicSensors/distance") ? String(fbdo.to<int>()).c_str() : fbdo.errorReason().c_str());
    distance=fbdo.to<int>();

  Serial.println();  
  Serial.print("d:");
  Serial.print(distance);
  
  
  Serial.println();
  Serial.println("------------------");
  Serial.println();
  

  delay(2500);
  }
}