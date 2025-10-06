// app/data/vastuTips.ts

export interface VastuTip {
  title: string;
  points: string[];
}

export const vastuTipsData: VastuTip[] = [
  {
    title: 'General Tips:',
    points: [
      'The entrance to the house should be towards the east as it is considered an auspicious direction. The entrance should also be well-kept and nicely decorated.',
      'The north direction signifies prosperity, so such this part of the house should not be blocked in any way.',
      'Make sure to never grow a Cactus plant in the house.',
      'Hinges on doors should work smoothly and should not make noise.',
      'If the house has a slope, it should be from south to north or from west to east only.',
      'Avoid putting up paintings or pictures that depict violence or sorrow.'
    ]
  },
  {
    title: 'Bedrooms:',
    points: [
        'The master bedroom in the house should always be in the south-west direction and not in the north.',
        'One should always sleep with their head towards the south.',
        'Make sure the bed is not placed directly below a beam.',
        'Bedrooms should be absolutely clutter free, especially the area around where you place your head while sleeping.'
    ]
  },
  {
    title: 'Children\'s Room:',
    points: [
        'Children’s rooms should be constructed in the northwest corner of the house.',
        'Avoid sticking furniture to the wall as it blocks the flow of positive energy.',
        'The colour scheme in a kid’s room should be mild yet cheerful.',
        'The study table should be placed in a way so that the child faces the east, north or north eastern corner of the room. The computer should be kept in the southeast corner.'
    ]
  },
  {
    title: 'Living Room:',
    points: [
        'The living room should always be in the north direction.',
        'Air-conditioners should be placed in the west and avoided being put in the southeast direction.',
        'The chairs of dining tables must be even-numbered.',
        'The south and west corners of the room are ideal for keeping furniture.'
    ]
  },
  {
    title: 'Kitchen:',
    points: [
        'The kitchen should be located in the southeast corner of the house. Northwest corner is also an ideal location for a kitchen.',
        'All cooking should be done while facing east or north.',
        'South, west, southeast and northwest are the ideal locations to place the refrigerator.',
        'Kitchen appliances such as mixers, juicers, microwaves and toasters should be kept in the southeast corner.',
        'Make sure the kitchen is equipped for good and adequate cross-ventilation.'
    ]
  },
  {
    title: 'Bathroom:',
    points: [
        'Bathrooms should be constructed in the north-west direction.',
        'Make sure the bathroom has sufficient ventilation and natural lighting.',
        'Sanitary and bath fittings must be of good quality and should work smoothly over the years. If broken, they should be fixed immediately.',
        'Always keep the bath and toilet areas neat and clean.'
    ]
  }
];