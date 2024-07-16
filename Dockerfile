FROM openjdk:17-jdk-alpine
WORKDIR /vg_ms_communion
COPY target/ms_vg_communion-0.0.1-SNAPSHOT.jar vg-ms-communion.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "vg-ms-communion.jar"]