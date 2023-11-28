import { CreditCardIcon, HomeIcon, UserIcon } from '@heroicons/react/24/solid';
import { Tab, TabIcon, TabsLine, TabsWrapper } from 'components/Tabs';
import { useEffect, useState } from 'react';


function Profile() {
    const [menu, setMenu] = useState('profile');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [streetName, setStreetName] = useState('');
    const [flatDetails, setFlatDetails] = useState('');
    const [postcode, setPostcode] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cardSecurityCode, setCardSecurityCode] = useState('');
    const [currentTab, setCurrentTab] = useState(0);

    const menus = ['profile', 'address', 'payment'];

    const getUser = async () => {
        // Fetch User
        //const res = await fetch('https://654a0134e182221f8d524e9c.mockapi.io/Restaurants');
        //const json = await res.json();
        let account = {
            firstName: 'Brian',
            lastName: 'Test',
            username: 'Brian Test Account',
            email: 'Brian@email.com',
            houseNumber: '50a',
            streetName: 'Test Place',
            flatDetails: '',
            postcode: 'FY1 1AB',
            cardNumber: '1234 1234 1234 1234',
            cardSecurityCode: '123'
        }

        setFirstName(account.firstName);
        setLastName(account.lastName);
        setUsername(account.username);
        setEmail(account.email);
        setHouseNumber(account.houseNumber);
        setStreetName(account.streetName);
        setFlatDetails(account.flatDetails);
        setPostcode(account.postcode);
        setCardNumber(account.cardNumber);
        setCardSecurityCode(account.cardSecurityCode);
    };

    const saveUser = async () => {
        // Save user
        //const res = await fetch('https://654a0134e182221f8d524e9c.mockapi.io/Restaurants');
        //const json = await res.json();
    }

    useEffect(() => {
        getUser();
    }, [])


    return (
        <div className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-50 pt-32 min-h-screen">
            <main className="mx-auto max-w-7xl px-4 sm:px-6 sm:px-8 grid grid-cols-3 sm:grid-cols-4 gap-4">
                <div className='hidden sm:block col-span-1 row-span-1'></div>
                {/* Title */}
                <section className='col-span-3'>
                    <h1 className="text-4xl font-bold tracking-tight flex items-center">
                        Your Account
                    </h1>
                </section>

                {/* menu sidebar*/}
                <section className="block sm:block col-span-4 row-span-4 sm:col-span-1 rounded-2xl">
                    <div className="flex bg-gray-100 dark:bg-gray-900 p-4 rounded-lg max-w-7xl w-full mx-auto">
                        <div className='flex sm:flex-col w-full mx-auto'>
                            <h3 className="font-bold hidden sm:block">Preferences</h3>
                            <TabsWrapper>
                                <TabsLine max={2} current={currentTab} />
                                <TabIcon
                                    index={0}
                                    name='profile'
                                    operation={() => setCurrentTab(0)}
                                    icon={<UserIcon className='w-8 scale-75 z-20 h-8 sm:h-4 sm:w-4 m-auto object-center' />}
                                    active={currentTab == 0}
                                />
                                <TabIcon
                                    index={1}
                                    name='address'
                                    operation={() => setCurrentTab(1)}
                                    icon={<HomeIcon className='w-8 scale-75 z-20 h-8 sm:h-4 sm:w-4 m-auto object-center' />}
                                    active={currentTab == 1}
                                />
                                <TabIcon
                                    index={2}
                                    name='payment'
                                    operation={() => setCurrentTab(2)}
                                    icon={<CreditCardIcon className='w-8 scale-75 z-20 h-8 sm:h-4 sm:w-4 m-auto object-center' />}
                                    active={currentTab == 2}
                                />
                            </TabsWrapper>
                        </div>
                    </div>
                </section>

                {/* Profile form */}
                <Tab
                    index={0}
                    active={currentTab == 0}
                >
                    <form className="w-full mx-auto grid grid-cols-2 gap-4 bg-gray-100 dark:bg-gray-900 rounded-lg">
                        {/* Username Input */}
                        <div className='w-full col-span-4 sm:col-span-2'>
                            <label htmlFor='username'>Username</label>
                            <input type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} className="w-full rounded-lg bg-white dark:bg-black p-2 pl-4" id="username" />
                        </div>
                        {/* Forename Input */}
                        <div className='w-full col-span-4 sm:col-span-1'>
                            <label htmlFor='firstName'>Forename</label>
                            <input type="text" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} className="w-full rounded-lg bg-white dark:bg-black p-2 pl-4" id="firstName" />
                        </div>

                        {/* Surname Input */}
                        <div className='w-full col-span-4 sm:col-span-1'>
                            <label htmlFor='lastName'>Surname</label>
                            <input type="text" value={lastName} onChange={(e) => { setLastName(e.target.value) }} className="w-full rounded-lg bg-white dark:bg-black p-2 pl-4" id="lastName" />
                        </div>

                        {/* Email Input */}
                        <div className='w-full col-span-4 sm:col-span-2'>
                            <label htmlFor='email'>Email Address</label>
                            <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} className="w-full rounded-lg bg-white dark:bg-black p-2 pl-4" id="email" />
                        </div>
                    </form>
                </Tab>

                {/* Address form */}
                <Tab
                    index={1}
                    active={currentTab == 1}
                >
                    <form className="w-full mx-auto grid grid-cols-4 gap-4 bg-gray-100 dark:bg-gray-900 rounded-lg">
                        {/* House Number Input */}
                        <div className='w-full col-span-4 sm:col-span-2'>
                            <label htmlFor='houseNumber'>House Number</label>
                            <input type="text" value={houseNumber} onChange={(e) => { setHouseNumber(e.target.value) }} className="w-full rounded-lg bg-white dark:bg-black p-2 pl-4" id="houseNumber" />
                        </div>
                        {/* Flat Input */}
                        <div className='w-full col-span-4 sm:col-span-2'>
                            <label htmlFor='flatDetails'>Flat Details</label>
                            <input type="text" value={flatDetails} onChange={(e) => { setFlatDetails(e.target.value) }} className="w-full rounded-lg bg-white dark:bg-black p-2 pl-4" id="flatDetails" />
                        </div>

                        {/* Street Input */}
                        <div className='w-full col-span-4 sm:col-span-3'>
                            <label htmlFor='streetName'>Street Name</label>
                            <input type="text" value={streetName} onChange={(e) => { setStreetName(e.target.value) }} className="w-full rounded-lg bg-white dark:bg-black p-2 pl-4" id="streetName" />
                        </div>

                        {/* Postcode */}
                        <div className='w-full col-span-4 sm:col-span-1'>
                            <label htmlFor='postcode'>Postcode</label>
                            <input type="text" value={postcode} onChange={(e) => { setPostcode(e.target.value) }} className="w-full rounded-lg bg-white dark:bg-black p-2 pl-4" id="postcode" />
                        </div>
                    </form>
                </Tab>
                {/* Payment form */}
                <Tab
                    index={2}
                    active={currentTab == 2}>
                    <form className="w-full mx-auto grid grid-cols-4 gap-4 bg-gray-100 dark:bg-gray-900 rounded-lg">
                        {/* Card Number Input */}
                        <div className='w-full col-span-4 sm:col-span-3'>
                            <label htmlFor='cardNumber'>Card Number</label>
                            <input type="text" value={cardNumber} onChange={(e) => { setCardNumber(e.target.value) }} className="w-full rounded-lg bg-white dark:bg-black p-2 pl-4" id="cardNumber" />
                        </div>
                        {/* cvc Input */}
                        <div className='w-full col-span-4 sm:col-span-1'>
                            <label htmlFor='cardSecurityCode'>cvc</label>
                            <input type="text" value={cardSecurityCode} onChange={(e) => { setCardSecurityCode(e.target.value) }} className="w-full rounded-lg bg-white dark:bg-black p-2 pl-4" id="cardSecurityCode" />
                        </div>
                    </form>
                </Tab>
                <button type='submit' className='bg-red-500 col-span-4 sm:col-span-3 p-4 rounded-lg text-lg font-bold w-full' onClick={(e) => { saveUser() }}>Save</button>
            </main>
        </div>

    )
}

export default Profile;