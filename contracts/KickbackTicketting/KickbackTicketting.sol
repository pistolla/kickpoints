pragma solidity ^0.5.0;

contract KickbackTicketting {
  address public owner;
  uint public ticketCount = 0;
  // uint public sponsorCount = 0;
  // uint public speakerCount = 0;

  struct Ticket {
    uint id;
    string meetupName;
    string location;
    string startDate;
    string description;
    uint value;
    string url;
  }

  event TaskCreated(
    uint id,
    string meetupName,
    string location,
    string startDate,
    string description,
    uint value,
    string url
  );

  mapping(uint => Ticket) public myTickets;
  constructor() public {
    owner = msg.sender;

    createTicket(
      'WildInOut',
      'innerCity',
      '2019-12-12 20:16:00',
      'tea party',
      1,
      'google.com'
    );
  }

  function createTicket(
    string memory _name,
    string memory _location,
    string memory _startDate,
    string memory _description,
    uint _price,
    string memory _url
  ) public {
    ticketCount ++;
    myTickets[ticketCount] = Ticket(ticketCount, _name, _location, _startDate, _description, _price, _url);
    emit TaskCreated(ticketCount, _name, _location, _startDate, _description, _price, _url);
  }

  // createSpeaker(
  //   string memory _fullName,
  //   string memory _topics,
  //   string memory _sessionStart,
  //   string memory _image
  // ) public {
  //   speakerCount++;
  //   eventSpeaker[speakerCount] = Speaker(speakerCount, _fullName, _topics, _sessionStart, _image);
  // }

  // createSponsor(
  //   string memory _title,
  //   string memory _image
  // ) public {
  //   sponsorCount++;
  //   eventSponsors[sponsorCount] = Sponsor(sponsorCount, _title, _image);
  // }
  

}
