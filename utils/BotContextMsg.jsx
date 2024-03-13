export const botMsg = [
    {
        atr: 'name',
        msg: 'Welcome user, my name is SAFEBOT, I am here to listen to your complain and to help you out of any abuse you might be a victim of. to start with, can you plaese tell me you name. Please note that note that you are expected to type your name directly with noting else attarched e.g "Samuel"',
        sug: [],
        lim: 25,
        dis: false,
        place: 'Enter your name here or type "Anonymous" if you wish to keep your identity'
    },
    {
        atr: 'age',
        pre: 'Welcome',
        msg: 'Can you please select your/victim age range so I can help you further',
        sug: ['12 and below', '13 to 25', '26 to 45', '46 to 65', '65 and above'],
        lim: '',
        dis: true,
        place: 'select your age range option'
    },
    {
        atr: 'gender',
        msg: 'What is the gender of the victim please',
        sug: ['male', 'female'],
        dis: false,
        lim: 15,
        place: 'Type your gender here if it\'s has not been stated above'
    },
    {
        atr: 'abuse',
        msg: 'Can you please tell us the kind of abuse you want to complain',
        sug: ['domestic violence', 'child abuse', 'rape', 'blackmailing'],
        dis: false,
        lim: '',
        place: 'Tell us how you are abused here'
    },
    {
        atr: 'evidenceType',
        msg: 'What type of evidence do you have to back up your report?',
        sug: ['video evidence', 'photo evidence', 'recording/voice evidence', 'document'],
        dis: false,
        lim: '',
        place: 'If you\'ve got evidence different from the ones stated above, let us know here'
    },
    {
        atr: 'actionTaken',
        msg: 'I would have asked you to upload your evidence now, but I am  still under development, but don\'t worry, one of our moderators will reach out to you to receive that. \n Can you please tell me the action(s) you\'ve taken as regarding this issue?',
        sug: ['Report to the police', 'scared to take action', 'fight the person', 'revenge'],
        dis: false,
        lim: '',
        place: 'Be very brief with your response'
    },
    {
        atr: 'actionWant',
        msg: 'What do you suggest we do for you as regarding this report?',
        sug: ['Legal action/advice', 'Counselling', 'communual resolution'],
        dis: false,
        lim: '',
        place: 'Tell us what you want please'
    },
    {
        atr: 'phone',
        msg: 'What is your phone number please?',
        sug: [],
        dis: false,
        lim: 12,
        place: 'Type your phone number with nothing else attarched to it'
    },
    {
        atr: 'email',
        msg: 'What is your email address where we will send your case tracking ID',
        sug: [],
        dis: false,
        lim: '',
        place: 'Your email with nothing else attached e.g "example@youremail.com"'
    },
]