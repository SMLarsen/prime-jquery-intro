// Generate employee data

function genEmployee() {
  var genEmp = {
    firstName: genFirstName(),
    lastName: genLastName(),
    title: genTitle(),
    salary: genSalary(),
    empNum: genEmpNum()
  };
  return genEmp;
}

function genRandomIndex(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function genFirstName() {
  var firstNames = ['Noah', 'Liam', 'Ethan', 'Mason', 'Lucas', 'Oliver',
    'Aiden', 'Elijah', 'James', 'Benjamin', 'Logan', 'Jacob', 'Jackson',
    'Michael', 'Daniel', 'Carter', 'Alexander', 'William', 'Luke', 'Owen',
    'Jack', 'Gabriel', 'Matthew', 'Henry', 'Sebastian', 'Wyatt', 'Jayden',
    'Nathan', 'Ryan', 'Grayson', 'Isaac', 'Jaxon', 'David', 'Caleb', 'Eli',
    'Levi', 'Julian', 'Andrew', 'Dylan', 'Lincoln', 'Emma', 'Olivia', 'Ava',
    'Sophia', 'Isabella', 'Mia', 'Charlotte', 'Amelia', 'Harper', 'Abigail',
    'Emily', 'Madison', 'Ella', 'Lily', 'Avery', 'Evelyn', 'Sofia', 'Aria',
    'Riley', 'Chloe', 'Scarlett', 'Ellie', 'Elizabeth', 'Aubrey', 'Layla',
    'Grace', 'Zoey', 'Mila', 'Addison', 'Hannah', 'Victoria', 'Brooklyn',
    'Zoe', 'Penelope', 'Lucy', 'Audrey', 'Natalie', 'Nora', 'Stella', 'Skylar'];
  return firstNames[genRandomIndex(1, firstNames.length)];
}

function genLastName() {
  var lastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown',
  'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson', 'Thomas',
  'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez',
  'Robinson', 'Clark', 'Rodriguez', 'Lewis', 'Lee', 'Walker', 'Hall',
  'Allen', 'Young', 'Hernandez', 'King', 'Wright', 'Lopez', 'Hill',
  'Scott', 'Green', 'Adams', 'Baker', 'Gonzalez', 'Nelson', 'Carter',
  'Mitchell', 'Perez', 'Roberts', 'Turner', 'Phillips', 'Campbell',
  'Parker', 'Evans', 'Edwards', 'Collins', 'Stewart', 'Sanchez',
  'Morris', 'Rogers', 'Reed', 'Cook', 'Morgan', 'Bell', 'Murphy',
  'Bailey', 'Rivera', 'Cooper', 'Richardson', 'Cox', 'Howard', 'Ward',
  'Torres', 'Peterson', 'Gray', 'Ramirez', 'James', 'Watson', 'Brooks',
  'Kelly', 'Sanders', 'Price', 'Bennett', 'Wood', 'Barnes', 'Ross',
  'Henderson', 'Coleman', 'Jenkins', 'Perry', 'Powell', 'Long',
  'Patterson', 'Hughes', 'Flores', 'Washington', 'Butler', 'Simmons',
  'Foster', 'Gonzales', 'Bryant', 'Alexander', 'Russell', 'Griffin',
  'Diaz', 'Hayes'];
  return lastNames[genRandomIndex(1, lastNames.length)];
}

function genSalary() {
  return genRandomIndex(300, 1500) * 100;
}

function genEmpNum() {
  return genRandomIndex(50000, 90000);

}

function genTitle() {
  var jobTitles = ['Application Developer', 'Application Support Analyst',
  'Applications Engineer', 'Associate Developer',
  'Chief Technology Officer (CTO)', 'Chief Information Officer (CIO)',
  'Computer and Information Systems Manager', 'Computer Systems Manager',
  'Customer Support Administrator', 'Customer Support Specialist',
  'Data Center Support Specialist', 'Data Quality Manager',
  'Database Administrator', 'Desktop Support Manager',
  'Desktop Support Specialist', 'Developer', 'Director of Technology',
  'Front End Developer', 'Help Desk Specialist', 'Help Desk Technician',
  'Information Technology Coordinator', 'Information Technology Director',
  'Information Technology Manager', 'IT Support Manager',
  'IT Support Specialist', 'IT Systems Administrator', 'Java Developer',
  'Junior Software Engineer', 'Management Information Systems Director',
  '.NET Developer', 'Network Architect', 'Network Engineer',
  'Network Systems Administrator', 'Programmer', 'Programmer Analyst',
  'Security Specialist', 'Senior Applications Engineer',
  'Senior Database Administrator', 'Senior Network Architect',
  'Senior Network Engineer', 'Senior Network System Administrator',
  'Senior Programmer', 'Senior Programmer Analyst',
  'Senior Security Specialist', 'Senior Software Engineer',
  'Senior Support Specialist', 'Senior System Administrator',
  'Senior System Analyst', 'Senior System Architect',
  'Senior System Designer', 'Senior Systems Analyst',
  'Senior Systems Software Engineer', 'Senior Web Administrator',
  'Senior Web Developer', 'Software Architect', 'Software Developer',
  'Software Engineer', 'Software Quality Assurance Analyst',
  'Support Specialist', 'Systems Administrator', 'Systems Analyst',
  'System Architect', 'Systems Designer', 'Systems Software Engineer',
  'Technical Operations Officer', 'Technical Support Engineer',
  'Technical Support Specialist', 'Technical Specialist',
  'Telecommunications Specialist', 'Web Administrator', 'Web Developer',
  'Webmaster'];
  return jobTitles[genRandomIndex(1, jobTitles.length)];
}
