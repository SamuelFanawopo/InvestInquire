# Start from the OpenJDK 21 slim image
FROM openjdk:21-slim AS build
WORKDIR /app

# Install Maven in the build stage since JDK images do not include Maven
RUN apt-get update && \
    apt-get install -y maven && \
    rm -rf /var/lib/apt/lists/*  # Clean up to keep the image clean

# Copy the pom.xml and source code
COPY pom.xml .
COPY src ./src

# Build the application
RUN mvn clean package -DskipTests

# Start a new stage from the same base image for a smaller final image
FROM openjdk:21-slim
WORKDIR /app

# Copy the jar file from the build stage
COPY --from=build /app/target/*.jar app.jar

# Expose the port the app runs on
EXPOSE 8080

# Command to run the application
CMD ["java", "-jar", "app.jar"]
