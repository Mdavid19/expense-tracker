FROM eclipse-temurin:17-jdk
COPY .mvn .mvn
COPY mvnw pom.xml ./
RUN ./mvnw dependency:go-offline
COPY backend/src ./src

CMD ["./mvnw", "spring-boot:run"]
