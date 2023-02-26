# Design Doc

## Airline backend system

### objective

we need to build the system that can support different features of an Airline Company. Our end user is going to be someone who wants to book flights and query about flights so we need a robust system to actually help them give the best experience possible. This doc is solely going to focus on the backed part of the system. We want to pepare the whole backend keeping the fact in the mind that, the code base should be as maintainable as possible.

### Requirements

     - A user should be able to search for flights from one place to another.
        -  User should be able to mention the source and destination details
        -  User should be able to select the date of the journey
                - [V2] User should be able to search for return flights and multi city flights
        -  User should be able to select the class of the flights (Non mandatory]
        -  User should be able to select the no of seats they want to book [Non Mandatory]
        -  Now based on the above data, we will list down the flights
        -  We should show our users the best available flights at the top based on time period of flight and then based on the price.
        -  We need to support pagination so that we can list chunk of flights at one point of time.
        -  We should support filters of flights based on Price, Departure time, Duration, Airline, Stops.
                - [V2] we can add support for more filters
     - A user should be able to book a flight considering that user is registered on the platform.
        -  User should be able to cancel a booking, and then based on some criteria we can initiate a refund for them.
        -  User should be able to request and book excess luggage for every flight.
     - For making a booking, the user has to make a payment [dummy]
     - Tracking fight prices should be possible, the user should be notified about any price drops or any delays.
     - user should be able to list their previous and upcoming flights
     - user should be able to download boarding pass if they have done online checkin.
     - Online check in mechanism should be supported
     - notifications via email for completing online check-in before 3 hours of departure.
     - User should be able to review the flight journey if and only if they have booked a flight.
        -  Review mechanism should involve star rating along with a commned.
        -  While listing any filght we should also display the review of the flight.
     - User should be able to authenticate to our system using email and password.
        - [V2] support ticketing where user can raise their queries.
     - Listing FAQ which will be static data
        - [V2] prepare seat selection
     - Coupons for discounts and offers
     - while making a booking a person can reserve more than one seats with one login id.

### Non Functional Requirements

      - We can expect that we are going to have more flight searches than flight bookings.
      - The system needs to be accurate in terms of bookings.
      - Expect that we will be having approx 1,00,000 total users, 5,00,000 bookings might come up in one quater.
      - So in one day we can expect 10000 bookings.
      - System should be capable of scaling up to at least 3x the current estimated traffic.
      - The system should handle realtime updates to flight prices, before user makes the final booking.
      - Concurrency should be handled, using RDBMS should be good solution.

#### Capacity Estimation

      - Storage estimates -
            - For upcoming 5 years, 80,00,000 bookings, 2,00,000 Users, considering all the users records and booking record take 10 MB of data,
              then overall 10 TB of memory should be fine for our initial pilot run.
      - Traffice estimates - if we consider 30:1 as the search : booking ratio. then at max we can expect 150000 search queries a day. 2 query/s

### Search and Flights service

      - Create Flights
      - Delete Flights
      - Update Flights
      - Search for flights
            - Based on multiple criteria we can search for flights
            - pagination
