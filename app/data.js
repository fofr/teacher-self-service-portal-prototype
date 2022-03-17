/**
 * Default values for user session data
 *
 * These are automatically added via the `autoStoreData` middleware. A values
 * will only be added to the session if it doesn't already exist. This may be
 * useful for testing journeys where users are returning or logging in to an
 * existing application.
 */
export default {
  features: {},
  firstName: 'Jane',
  lastName: 'Doe',
  middleName: 'June',
  trn: '1234567',
  dob: '31/03/1950',
  nino: 'QQ123456C',
  email: 'jane.doe@example.com',
  title: 'Mrs.',
  previousSurnames: ['Bloggs'],
  primaryContactNumber: '07123456789',
  otherContactNumber: '01234 987654',
  address: {
    line1: '1 Street Name',
    town: 'Town',
    postcode: 'SW1 1AA'
  },
  redacted: {
    firstName: 'Jane',
    lastName: 'Doe',
    trn: '1234567',
    dob: '31/03/1950',
    nino: 'Q*******C',
    email: 'ja****oe@*******.com',
    title: 'Mrs.',
    previousSurnames: ['Bloggs'],
    primaryContactNumber: '07*******89',
    otherContactNumber: '01*******54',
    address: {
      line1: '1 Street Name',
      town: 'Town',
      postcode: 'SW1 1AA'
    }
  }
}
