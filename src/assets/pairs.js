const pairs = [
  {
    emoji: 'U+1F489',
    associated_emoji: 'U+1F637',
    association_type: 'Medical',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F41B',
    associated_emoji: 'U+1F4BB',
    association_type: 'Nature and Technology',
    difficulty_index: 1,
  },
  {
    emoji: 'U+1F44B',
    associated_emoji: 'U+1F47E',
    association_type: 'Celebration',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F631',
    associated_emoji: 'U+1F425',
    association_type: 'Animal',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F600',
    associated_emoji: 'U+1F62D',
    association_type: 'Facial Expression',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F30E',
    associated_emoji: 'U+1F32C',
    association_type: 'Nature',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F52B',
    associated_emoji: 'U+1F3AE',
    association_type: 'Sport',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F354',
    associated_emoji: 'U+1F356',
    association_type: 'Food',
    difficulty_index: 5,
  },
  {
    emoji: 'U+1F50D',
    associated_emoji: 'U+1F4A1',
    association_type: 'Technology',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F4DE',
    associated_emoji: 'U+1F4F1',
    association_type: 'Office',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F4A1',
    associated_emoji: 'U+1F4F0',
    association_type: 'Technology',
    difficulty_index: 1,
  },
  {
    emoji: 'U+1F37B',
    associated_emoji: 'U+1F37A',
    association_type: 'Drink',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F6C0',
    associated_emoji: 'U+1F6B2',
    association_type: 'Transportation',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F609',
    associated_emoji: 'U+1F60B',
    association_type: 'Love',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F36A',
    associated_emoji: 'U+1F382',
    association_type: 'Food',
    difficulty_index: 5,
  },
  {
    emoji: 'U+1F3EB',
    associated_emoji: 'U+1F3AE',
    association_type: 'Entertainment',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F33D',
    associated_emoji: 'U+1F331',
    association_type: 'Nature',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F4DE',
    associated_emoji: 'U+1F4F1',
    association_type: 'Office',
    difficulty_index: 5,
  },
  {
    emoji: 'U+1F36D',
    associated_emoji: 'U+1F36C',
    association_type: 'Food',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F42D',
    associated_emoji: 'U+1F438',
    association_type: 'Animal',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F50D',
    associated_emoji: 'U+1F4BB',
    association_type: 'Technology',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F44D',
    associated_emoji: 'U+1F44E',
    association_type: 'Gesture',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F381',
    associated_emoji: 'U+1F389',
    association_type: 'Celebration',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F52B',
    associated_emoji: 'U+1F3AE',
    association_type: 'Sport',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F60A',
    associated_emoji: 'U+1F60E',
    association_type: 'Love',
    difficulty_index: 1,
  },
  {
    emoji: 'U+1F3C3',
    associated_emoji: 'U+1F3CA',
    association_type: 'Sport',
    difficulty_index: 5,
  },
  {
    emoji: 'U+1F436',
    associated_emoji: 'U+1F434',
    association_type: 'Animal',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F4A3',
    associated_emoji: 'U+1F4DA',
    association_type: 'Communication',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F52C',
    associated_emoji: 'U+1F3AF',
    association_type: 'Sport',
    difficulty_index: 5,
  },
  {
    emoji: 'U+1F389',
    associated_emoji: 'U+1F380',
    association_type: 'Celebration',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F34C',
    associated_emoji: 'U+1F34F',
    association_type: 'Food',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F680',
    associated_emoji: 'U+1F692',
    association_type: 'Transportation',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F4CC',
    associated_emoji: 'U+1F4CE',
    association_type: 'Communication',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F33F',
    associated_emoji: 'U+1F342',
    association_type: 'Nature',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F3E1',
    associated_emoji: 'U+1F3AF',
    association_type: 'Entertainment',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F47B',
    associated_emoji: 'U+1F47D',
    association_type: 'Mythical',
    difficulty_index: 5,
  },
  {
    emoji: 'U+1F402',
    associated_emoji: 'U+1F3E9',
    association_type: 'Animal',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F4A9',
    associated_emoji: 'U+1F4B0',
    association_type: 'Money',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F600',
    associated_emoji: 'U+1F923',
    association_type: 'Facial Expression',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F33E',
    associated_emoji: 'U+1F340',
    association_type: 'Nature',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F389',
    associated_emoji: 'U+1F49D',
    association_type: 'Celebration',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F4D9',
    associated_emoji: 'U+1F4DA',
    association_type: 'Communication',
    difficulty_index: 1,
  },
  {
    emoji: 'U+1F48B',
    associated_emoji: 'U+1F491',
    association_type: 'Love',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F3B2',
    associated_emoji: 'U+1F3B3',
    association_type: 'Entertainment',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F344',
    associated_emoji: 'U+1F332',
    association_type: 'Nature',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F354',
    associated_emoji: 'U+1F357',
    association_type: 'Food',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F423',
    associated_emoji: 'U+1F42B',
    association_type: 'Animal',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F4E2',
    associated_emoji: 'U+1F4E3',
    association_type: 'Communication',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F389',
    associated_emoji: 'U+1F49F',
    association_type: 'Celebration',
    difficulty_index: 5,
  },
  {
    emoji: 'U+1F4F1',
    associated_emoji: 'U+1F4E4',
    association_type: 'Office',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F367',
    associated_emoji: 'U+1F36B',
    association_type: 'Food',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F4AA',
    associated_emoji: 'U+1F4AF',
    association_type: 'Money',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F3AE',
    associated_emoji: 'U+1F3B0',
    association_type: 'Entertainment',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F601',
    associated_emoji: 'U+1F605',
    association_type: 'Facial Expression',
    difficulty_index: 1,
  },
  {
    emoji: 'U+1F409',
    associated_emoji: 'U+1F40A',
    association_type: 'Animal',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F50E',
    associated_emoji: 'U+1F4F1',
    association_type: 'Technology',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F4E9',
    associated_emoji: 'U+1F4E5',
    association_type: 'Communication',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F3A8',
    associated_emoji: 'U+1F3B0',
    association_type: 'Entertainment',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F52A',
    associated_emoji: 'U+1F3A4',
    association_type: 'Sport',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F33A',
    associated_emoji: 'U+1F33B',
    association_type: 'Nature',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F4D2',
    associated_emoji: 'U+1F4D3',
    association_type: 'Communication',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F341',
    associated_emoji: 'U+1F342',
    association_type: 'Nature',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F36E',
    associated_emoji: 'U+1F34D',
    association_type: 'Food',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F6A3',
    associated_emoji: 'U+1F6A2',
    association_type: 'Transportation',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F4D8',
    associated_emoji: 'U+1F4D9',
    association_type: 'Communication',
    difficulty_index: 1,
  },
  {
    emoji: 'U+1F3C7',
    associated_emoji: 'U+1F3B5',
    association_type: 'Entertainment',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F47E',
    associated_emoji: 'U+1F47F',
    association_type: 'Mythical',
    difficulty_index: 5,
  },
  {
    emoji: 'U+1F3E0',
    associated_emoji: 'U+1F3B2',
    association_type: 'Entertainment',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F346',
    associated_emoji: 'U+1F345',
    association_type: 'Food',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F4AC',
    associated_emoji: 'U+1F4AD',
    association_type: 'Money',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F6B5',
    associated_emoji: 'U+1F69A',
    association_type: 'Transportation',
    difficulty_index: 5,
  },
  {
    emoji: 'U+1F338',
    associated_emoji: 'U+1F33A',
    association_type: 'Nature',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F5DE',
    associated_emoji: 'U+1F5E3',
    association_type: 'Office',
    difficulty_index: 5,
  },
  {
    emoji: 'U+1F408',
    associated_emoji: 'U+1F406',
    association_type: 'Animal',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F3AE',
    associated_emoji: 'U+1F3A7',
    association_type: 'Entertainment',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F3C3',
    associated_emoji: 'U+1F3C4',
    association_type: 'Sport',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F4A4',
    associated_emoji: 'U+1F4AC',
    association_type: 'Communication',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F339',
    associated_emoji: 'U+1F33C',
    association_type: 'Nature',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F37B',
    associated_emoji: 'U+1F374',
    association_type: 'Food',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F4B8',
    associated_emoji: 'U+1F4B3',
    association_type: 'Money',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F6E5',
    associated_emoji: 'U+1F6A7',
    association_type: 'Transportation',
    difficulty_index: 5,
  },
  {
    emoji: 'U+1F525',
    associated_emoji: 'U+1F32A',
    association_type: 'Weather',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F3D7',
    associated_emoji: 'U+1F3D5',
    association_type: 'Entertainment',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F402',
    associated_emoji: 'U+1F40C',
    association_type: 'Animal',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F4E8',
    associated_emoji: 'U+1F4E7',
    association_type: 'Communication',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F344',
    associated_emoji: 'U+1F330',
    association_type: 'Nature',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F3C0',
    associated_emoji: 'U+1F3B2',
    association_type: 'Entertainment',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F352',
    associated_emoji: 'U+1F355',
    association_type: 'Food',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F697',
    associated_emoji: 'U+1F6A2',
    association_type: 'Transportation',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F4DE',
    associated_emoji: 'U+1F4D6',
    association_type: 'Communication',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F414',
    associated_emoji: 'U+1F417',
    association_type: 'Animal',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F373',
    associated_emoji: 'U+1F37D',
    association_type: 'Food',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F3D9',
    associated_emoji: 'U+1F3D8',
    association_type: 'Entertainment',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F4A3',
    associated_emoji: 'U+1F4A8',
    association_type: 'Communication',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F33F',
    associated_emoji: 'U+1F33E',
    association_type: 'Nature',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F6A4',
    associated_emoji: 'U+1F697',
    association_type: 'Transportation',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F355',
    associated_emoji: 'U+1F357',
    association_type: 'Food',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F3A3',
    associated_emoji: 'U+1F3A7',
    association_type: 'Entertainment',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F4E9',
    associated_emoji: 'U+1F4E6',
    association_type: 'Communication',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F4C4',
    associated_emoji: 'U+1F4CB',
    association_type: 'Communication',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F697',
    associated_emoji: 'U+1F699',
    association_type: 'Transportation',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F3C1',
    associated_emoji: 'U+1F3B2',
    association_type: 'Entertainment',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F417',
    associated_emoji: 'U+1F41F',
    association_type: 'Animal',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F3A0',
    associated_emoji: 'U+1F3A1',
    association_type: 'Entertainment',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F4F7',
    associated_emoji: 'U+1F4F9',
    association_type: 'Communication',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F342',
    associated_emoji: 'U+1F33C',
    association_type: 'Nature',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F357',
    associated_emoji: 'U+1F354',
    association_type: 'Food',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F6A8',
    associated_emoji: 'U+1F69C',
    association_type: 'Transportation',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F408',
    associated_emoji: 'U+1F40E',
    association_type: 'Animal',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F4BB',
    associated_emoji: 'U+1F4BC',
    association_type: 'Money',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F9D9',
    associated_emoji: 'U+1F9DA',
    association_type: 'Person',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F3A8',
    associated_emoji: 'U+1F3AC',
    association_type: 'Entertainment',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F48E',
    associated_emoji: 'U+1F491',
    association_type: 'Love',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F3D6',
    associated_emoji: 'U+1F3D5',
    association_type: 'Entertainment',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F345',
    associated_emoji: 'U+1F34A',
    association_type: 'Food',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F4D6',
    associated_emoji: 'U+1F4D7',
    association_type: 'Communication',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F33D',
    associated_emoji: 'U+1F33E',
    association_type: 'Nature',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F698',
    associated_emoji: 'U+1F695',
    association_type: 'Transportation',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F3E9',
    associated_emoji: 'U+1F3EA',
    association_type: 'Entertainment',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F344',
    associated_emoji: 'U+1F341',
    association_type: 'Nature',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F37A',
    associated_emoji: 'U+1F374',
    association_type: 'Food',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F407',
    associated_emoji: 'U+1F406',
    association_type: 'Animal',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F9B9',
    associated_emoji: 'U+1F9B8',
    association_type: 'Person',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F4C5',
    associated_emoji: 'U+1F4C9',
    association_type: 'Communication',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F45F',
    associated_emoji: 'U+1F460',
    association_type: 'Person',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F6A3',
    associated_emoji: 'U+1F698',
    association_type: 'Transportation',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F35F',
    associated_emoji: 'U+1F35C',
    association_type: 'Food',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F4A9',
    associated_emoji: 'U+1F4AF',
    association_type: 'Communication',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F346',
    associated_emoji: 'U+1F347',
    association_type: 'Food',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F33A',
    associated_emoji: 'U+1F33D',
    association_type: 'Nature',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F3A6',
    associated_emoji: 'U+1F3A5',
    association_type: 'Entertainment',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F680',
    associated_emoji: 'U+1F697',
    association_type: 'Transportation',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F9D9',
    associated_emoji: 'U+1F9D1',
    association_type: 'Person',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F4B0',
    associated_emoji: 'U+1F4B3',
    association_type: 'Money',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F6A1',
    associated_emoji: 'U+1F6A3',
    association_type: 'Transportation',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F344',
    associated_emoji: 'U+1F33E',
    association_type: 'Nature',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F3A7',
    associated_emoji: 'U+1F3AE',
    association_type: 'Entertainment',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F355',
    associated_emoji: 'U+1F354',
    association_type: 'Food',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F4F8',
    associated_emoji: 'U+1F4F0',
    association_type: 'Communication',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F6B2',
    associated_emoji: 'U+1F6B4',
    association_type: 'Transportation',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F413',
    associated_emoji: 'U+1F415',
    association_type: 'Animal',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F9D8',
    associated_emoji: 'U+1F9D1',
    association_type: 'Person',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F348',
    associated_emoji: 'U+1F34A',
    association_type: 'Food',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F4E9',
    associated_emoji: 'U+1F4E8',
    association_type: 'Communication',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F6E0',
    associated_emoji: 'U+1F6E1',
    association_type: 'Transportation',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F9D9',
    associated_emoji: 'U+1F9D0',
    association_type: 'Person',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F352',
    associated_emoji: 'U+1F354',
    association_type: 'Food',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F341',
    associated_emoji: 'U+1F33A',
    association_type: 'Nature',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F4B8',
    associated_emoji: 'U+1F4B5',
    association_type: 'Money',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F34E',
    associated_emoji: 'U+1F34C',
    association_type: 'Food',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F409',
    associated_emoji: 'U+1F40A',
    association_type: 'Animal',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F4DE',
    associated_emoji: 'U+1F4DC',
    association_type: 'Communication',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F3E2',
    associated_emoji: 'U+1F3E0',
    association_type: 'Entertainment',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F3C3',
    associated_emoji: 'U+1F3CA',
    association_type: 'Entertainment',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F6F0',
    associated_emoji: 'U+1F6EB',
    association_type: 'Transportation',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F6B5',
    associated_emoji: 'U+1F6A7',
    association_type: 'Transportation',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F468',
    associated_emoji: 'U+1F469',
    association_type: 'Person',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F579',
    associated_emoji: 'U+1F577',
    association_type: 'Food',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F36B',
    associated_emoji: 'U+1F35F',
    association_type: 'Food',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F342',
    associated_emoji: 'U+1F33F',
    association_type: 'Nature',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F9D9',
    associated_emoji: 'U+1F9D3',
    association_type: 'Person',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F98D',
    associated_emoji: 'U+1F432',
    association_type: 'Animal',
    difficulty_index: 5,
  },
  {
    emoji: 'U+1F4F9',
    associated_emoji: 'U+1F4F7',
    association_type: 'Communication',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F449',
    associated_emoji: 'U+1F446',
    association_type: 'Body',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F402',
    associated_emoji: 'U+1F40D',
    association_type: 'Animal',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F373',
    associated_emoji: 'U+1F37F',
    association_type: 'Food',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F34F',
    associated_emoji: 'U+1F34A',
    association_type: 'Food',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F3D4',
    associated_emoji: 'U+1F3D5',
    association_type: 'Entertainment',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F4E6',
    associated_emoji: 'U+1F4E5',
    association_type: 'Communication',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F3E8',
    associated_emoji: 'U+1F3E9',
    association_type: 'Entertainment',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F6F3',
    associated_emoji: 'U+1F6EB',
    association_type: 'Transportation',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F33C',
    associated_emoji: 'U+1F33A',
    association_type: 'Nature',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F4F7',
    associated_emoji: 'U+1F4F9',
    association_type: 'Communication',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F9D1',
    associated_emoji: 'U+1F9D8',
    association_type: 'Person',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F4C4',
    associated_emoji: 'U+1F4C8',
    association_type: 'Communication',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F3AC',
    associated_emoji: 'U+1F3AD',
    association_type: 'Entertainment',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F35C',
    associated_emoji: 'U+1F354',
    association_type: 'Food',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F9DA',
    associated_emoji: 'U+1F9DB',
    association_type: 'Person',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F382',
    associated_emoji: 'U+1F370',
    association_type: 'Food',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F9D0',
    associated_emoji: 'U+1F468',
    association_type: 'Person',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F426',
    associated_emoji: 'U+1F43E',
    association_type: 'Animal',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F35F',
    associated_emoji: 'U+1F354',
    association_type: 'Food',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F6A2',
    associated_emoji: 'U+1F698',
    association_type: 'Transportation',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F52B',
    associated_emoji: 'U+1F4A1',
    association_type: 'Object',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F48D',
    associated_emoji: 'U+1F469',
    association_type: 'Person',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F33A',
    associated_emoji: 'U+1F332',
    association_type: 'Nature',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F4DA',
    associated_emoji: 'U+1F4E4',
    association_type: 'Communication',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F3E9',
    associated_emoji: 'U+1F3EF',
    association_type: 'Entertainment',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F6E1',
    associated_emoji: 'U+1F6A4',
    association_type: 'Transportation',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F44C',
    associated_emoji: 'U+1F44D',
    association_type: 'Body',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F9D9',
    associated_emoji: 'U+1F9DD',
    association_type: 'Person',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F52A',
    associated_emoji: 'U+1F48B',
    association_type: 'Object',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F36D',
    associated_emoji: 'U+1F363',
    association_type: 'Food',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F33D',
    associated_emoji: 'U+1F332',
    association_type: 'Nature',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F6A7',
    associated_emoji: 'U+1F68D',
    association_type: 'Transportation',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F34B',
    associated_emoji: 'U+1F347',
    association_type: 'Food',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F4CD',
    associated_emoji: 'U+1F4CB',
    association_type: 'Communication',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F40C',
    associated_emoji: 'U+1F41C',
    association_type: 'Animal',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F441',
    associated_emoji: 'U+1F436',
    association_type: 'Animal',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F4F0',
    associated_emoji: 'U+1F4E8',
    association_type: 'Communication',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F6EB',
    associated_emoji: 'U+1F680',
    association_type: 'Transportation',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F4B6',
    associated_emoji: 'U+1F4A3',
    association_type: 'Money',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F6A4',
    associated_emoji: 'U+1F6A5',
    association_type: 'Transportation',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F37C',
    associated_emoji: 'U+1F374',
    association_type: 'Food',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F3EB',
    associated_emoji: 'U+1F3E5',
    association_type: 'Entertainment',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F6C0',
    associated_emoji: 'U+1F697',
    association_type: 'Transportation',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F438',
    associated_emoji: 'U+1F42A',
    association_type: 'Animal',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F916',
    associated_emoji: 'U+1F91E',
    association_type: 'Person',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F3C1',
    associated_emoji: 'U+1F3AF',
    association_type: 'Entertainment',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F4A4',
    associated_emoji: 'U+1F4E6',
    association_type: 'Object',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F6E0',
    associated_emoji: 'U+1F6E2',
    association_type: 'Transportation',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F34C',
    associated_emoji: 'U+1F34F',
    association_type: 'Food',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F48E',
    associated_emoji: 'U+1F469',
    association_type: 'Person',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F98A',
    associated_emoji: 'U+1F432',
    association_type: 'Animal',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F4E9',
    associated_emoji: 'U+1F4EB',
    association_type: 'Communication',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F331',
    associated_emoji: 'U+1F332',
    association_type: 'Nature',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F3C8',
    associated_emoji: 'U+1F3A0',
    association_type: 'Entertainment',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F52E',
    associated_emoji: 'U+1F50D',
    association_type: 'Object',
    difficulty_index: 4,
  },

  {
    emoji: 'U+1F6A8',
    associated_emoji: 'U+1F69D',
    association_type: 'Transportation',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F60A',
    associated_emoji: 'U+1F917',
    association_type: 'Person',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F374',
    associated_emoji: 'U+1F35F',
    association_type: 'Food',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F3ED',
    associated_emoji: 'U+1F3E0',
    association_type: 'Entertainment',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F95B',
    associated_emoji: 'U+1F355',
    association_type: 'Food',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F4F8',
    associated_emoji: 'U+1F4F1',
    association_type: 'Communication',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F422',
    associated_emoji: 'U+1F423',
    association_type: 'Animal',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F47D',
    associated_emoji: 'U+1F47B',
    association_type: 'Person',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F354',
    associated_emoji: 'U+1F35F',
    association_type: 'Food',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F3C0',
    associated_emoji: 'U+1F3A4',
    association_type: 'Entertainment',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F433',
    associated_emoji: 'U+1F40A',
    association_type: 'Animal',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F4B0',
    associated_emoji: 'U+1F4A1',
    association_type: 'Money',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F6F0',
    associated_emoji: 'U+1F6EB',
    association_type: 'Transportation',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F6A3',
    associated_emoji: 'U+1F697',
    association_type: 'Transportation',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F680',
    associated_emoji: 'U+1F68C',
    association_type: 'Transportation',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F469',
    associated_emoji: 'U+1F476',
    association_type: 'Person',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F389',
    associated_emoji: 'U+1F388',
    association_type: 'Entertainment',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F31F',
    associated_emoji: 'U+1F324',
    association_type: 'Nature',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F440',
    associated_emoji: 'U+1F4A9',
    association_type: 'Communication',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F3D7',
    associated_emoji: 'U+1F3D3',
    association_type: 'Entertainment',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F6B2',
    associated_emoji: 'U+1F6B9',
    association_type: 'Transportation',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F331',
    associated_emoji: 'U+1F334',
    association_type: 'Nature',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F4DD',
    associated_emoji: 'U+1F4E2',
    association_type: 'Communication',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F98D',
    associated_emoji: 'U+1F41D',
    association_type: 'Animal',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F37A',
    associated_emoji: 'U+1F35E',
    association_type: 'Food',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F3A7',
    associated_emoji: 'U+1F3E1',
    association_type: 'Entertainment',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F934',
    associated_emoji: 'U+1F93C',
    association_type: 'Person',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F5FC',
    associated_emoji: 'U+1F5FA',
    association_type: 'Object',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F6B5',
    associated_emoji: 'U+1F6A2',
    association_type: 'Transportation',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F346',
    associated_emoji: 'U+1F349',
    association_type: 'Food',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F449',
    associated_emoji: 'U+1F446',
    association_type: 'Person',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F3C2',
    associated_emoji: 'U+1F3AF',
    association_type: 'Entertainment',
    difficulty_index: 3,
  },

  {
    emoji: 'U+1F409',
    associated_emoji: 'U+1F412',
    association_type: 'Animal',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F4F0',
    associated_emoji: 'U+1F4EB',
    association_type: 'Communication',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F3E5',
    associated_emoji: 'U+1F3EB',
    association_type: 'Entertainment',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F69F',
    associated_emoji: 'U+1F698',
    association_type: 'Transportation',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F60D',
    associated_emoji: 'U+1F618',
    association_type: 'Person',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F48B',
    associated_emoji: 'U+1F469',
    association_type: 'Person',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F371',
    associated_emoji: 'U+1F358',
    association_type: 'Food',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F6F3',
    associated_emoji: 'U+1F68D',
    association_type: 'Transportation',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F327',
    associated_emoji: 'U+1F332',
    association_type: 'Nature',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F3D4',
    associated_emoji: 'U+1F3C4',
    association_type: 'Entertainment',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F525',
    associated_emoji: 'U+1F6D1',
    association_type: 'Object',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F468',
    associated_emoji: 'U+1F46F',
    association_type: 'Person',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F3B5',
    associated_emoji: 'U+1F3A8',
    association_type: 'Entertainment',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F47F',
    associated_emoji: 'U+1F47D',
    association_type: 'Person',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F98C',
    associated_emoji: 'U+1F41C',
    association_type: 'Animal',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F3AF',
    associated_emoji: 'U+1F3AD',
    association_type: 'Entertainment',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F63A',
    associated_emoji: 'U+1F436',
    association_type: 'Animal',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F95C',
    associated_emoji: 'U+1F354',
    association_type: 'Food',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F3C8',
    associated_emoji: 'U+1F3E0',
    association_type: 'Entertainment',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F4D6',
    associated_emoji: 'U+1F4D2',
    association_type: 'Communication',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F36A',
    associated_emoji: 'U+1F369',
    association_type: 'Food',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F9A2',
    associated_emoji: 'U+1F48F',
    association_type: 'Object',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F680',
    associated_emoji: 'U+1F3A0',
    association_type: 'Entertainment',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F54A',
    associated_emoji: 'U+1F469',
    association_type: 'Person',
    difficulty_index: 4,
  },
  {
    emoji: 'U+1F3D3',
    associated_emoji: 'U+1F3AD',
    association_type: 'Entertainment',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F4D5',
    associated_emoji: 'U+1F4F1',
    association_type: 'Communication',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F438',
    associated_emoji: 'U+1F408',
    association_type: 'Animal',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F3A0',
    associated_emoji: 'U+1F3BE',
    association_type: 'Entertainment',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F346',
    associated_emoji: 'U+1F347',
    association_type: 'Food',
    difficulty_index: 2,
  },
  {
    emoji: 'U+1F916',
    associated_emoji: 'U+1F3A3',
    association_type: 'Person',
    difficulty_index: 3,
  },
  {
    emoji: 'U+1F4F1',
    associated_emoji: 'U+1F4F2',
    association_type: 'Communication',
    difficulty_index: 1,
  },
  {
    emoji: 'U+1F33F',
    associated_emoji: 'U+1F33E',
    association_type: 'Nature',
    difficulty_index: 1,
  },
  {
    emoji: 'U+1F32A',
    associated_emoji: 'U+1F32B',
    association_type: 'Food',
    difficulty_index: 1,
  },
  {
    emoji: 'U+1F6B9',
    associated_emoji: 'U+1F6BA',
    association_type: 'Transportation',
    difficulty_index: 1,
  },
  {
    emoji: 'U+1F4A4',
    associated_emoji: 'U+1F4A2',
    association_type: 'Communication',
    difficulty_index: 1,
  },
  {
    emoji: 'U+1F50C',
    associated_emoji: 'U+1F4F0',
    association_type: 'Communication',
    difficulty_index: 1,
  },
  {
    emoji: 'U+1F5A5',
    associated_emoji: 'U+1F5A8',
    association_type: 'Object',
    difficulty_index: 1,
  },
  {
    emoji: 'U+1F3EB',
    associated_emoji: 'U+1F3E2',
    association_type: 'Entertainment',
    difficulty_index: 1,
  },
  {
    emoji: 'U+1F38A',
    associated_emoji: 'U+1F37B',
    association_type: 'Food',
    difficulty_index: 1,
  },
  {
    emoji: 'U+1F389',
    associated_emoji: 'U+1F388',
    association_type: 'Celebration',
    difficulty_index: 1,
  },
  {
    emoji: 'U+1F4B0',
    associated_emoji: 'U+1F4B3',
    association_type: 'Communication',
    difficulty_index: 1,
  },
  {
    emoji: 'U+1F3C0',
    associated_emoji: 'U+1F3C8',
    association_type: 'Entertainment',
    difficulty_index: 1,
  },
  {
    emoji: 'U+1F6A2',
    associated_emoji: 'U+1F68F',
    association_type: 'Transportation',
    difficulty_index: 1,
  },
  {
    emoji: 'U+1F6BD',
    associated_emoji: 'U+1F6BC',
    association_type: 'Transportation',
    difficulty_index: 1,
  },
  {
    emoji: 'U+1F3E1',
    associated_emoji: 'U+1F3AD',
    association_type: 'Entertainment',
    difficulty_index: 1,
  },
  {
    emoji: 'U+1F49B',
    associated_emoji: 'U+1F49A',
    association_type: 'Person',
    difficulty_index: 1,
  },
  {
    emoji: 'U+1F34C',
    associated_emoji: 'U+1F34E',
    association_type: 'Food',
    difficulty_index: 1,
  },
  {
    emoji: 'U+1F354',
    associated_emoji: 'U+1F355',
    association_type: 'Food',
    difficulty_index: 1,
  },
  {
    emoji: 'U+1F527',
    associated_emoji: 'U+1F52B',
    association_type: 'Object',
    difficulty_index: 1,
  },
  {
    emoji: 'U+1F476',
    associated_emoji: 'U+1F47C',
    association_type: 'Person',
    difficulty_index: 1,
  },
  {
    emoji: 'U+1F5DE',
    associated_emoji: 'U+1F5E0',
    association_type: 'Object',
    difficulty_index: 1,
  },
  {
    emoji: 'U+1F3E3',
    associated_emoji: 'U+1F3E5',
    association_type: 'Entertainment',
    difficulty_index: 1,
  },
  {
    emoji: 'U+1F3C1',
    associated_emoji: 'U+1F3B6',
    association_type: 'Entertainment',
    difficulty_index: 1,
  },
  {
    emoji: 'U+1F4A1',
    associated_emoji: 'U+1F4A3',
    association_type: 'Communication',
    difficulty_index: 1,
  },
  {
    emoji: 'U+1F6A3',
    associated_emoji: 'U+1F6A8',
    association_type: 'Transportation',
    difficulty_index: 1,
  },
  {
    emoji: 'U+1F347',
    associated_emoji: 'U+1F348',
    association_type: 'Food',
    difficulty_index: 1,
  },
  {
    emoji: 'U+1F385',
    associated_emoji: 'U+1F386',
    association_type: 'Celebration',
    difficulty_index: 1,
  },
  {
    emoji: 'U+1F42C',
    associated_emoji: 'U+1F41D',
    association_type: 'Animal',
    difficulty_index: 1,
  },
  {
    emoji: 'U+1F6B5',
    associated_emoji: 'U+1F6B4',
    association_type: 'Transportation',
    difficulty_index: 1,
  },
  {
    emoji: 'U+1F336',
    associated_emoji: 'U+1F337',
    association_type: 'Nature',
    difficulty_index: 1,
  },
]
// const checkIfEqual = () => {
//   let newPairs = [];
//   for (let outer = 0; outer < pairs.length; outer++) {
//     let outerEmoji1 = pairs[outer].emoji;
//     let outerEmoji2 = pairs[outer].associated_emoji;
//     let pairAlreadyThere = false;
//     for (let inner = 0; inner < newPairs.length; inner++) {
//       let innerEmoji1 = newPairs[inner].emoji;
//       let innerEmoji2 = newPairs[inner].associated_emoji;
//       pairAlreadyThere =
//         outerEmoji1 === innerEmoji1 && outerEmoji2 === innerEmoji2;
//       if (pairAlreadyThere) {
//         console.log(pairs[outer]);
//         break;
//       }
//     }
//     if (!pairAlreadyThere) {
//       newPairs.push(pairs[outer]);
//     }
//   }
//   console.log(newPairs.length);
// };
// console.log(pairs.length);
// checkIfEqual();
//12 duplicates - will remove:
// {
//   emoji: 'U+1F4DE',
//   associated_emoji: 'U+1F4F1',
//   association_type: 'Office',
//   difficulty_index: 5
// }
// {
//   emoji: 'U+1F52B',
//   associated_emoji: 'U+1F3AE',
//   association_type: 'Sport',
//   difficulty_index: 4
// }
// {
//   emoji: 'U+1F409',
//   associated_emoji: 'U+1F40A',
//   association_type: 'Animal',
//   difficulty_index: 2
// }
// {
//   emoji: 'U+1F3C3',
//   associated_emoji: 'U+1F3CA',
//   association_type: 'Entertainment',
//   difficulty_index: 3
// }
// {
//   emoji: 'U+1F4F7',
//   associated_emoji: 'U+1F4F9',
//   association_type: 'Communication',
//   difficulty_index: 3
// }
// {
//   emoji: 'U+1F34C',
//   associated_emoji: 'U+1F34F',
//   association_type: 'Food',
//   difficulty_index: 2
// }
// {
//   emoji: 'U+1F6F0',
//   associated_emoji: 'U+1F6EB',
//   association_type: 'Transportation',
//   difficulty_index: 3
// }
// {
//   emoji: 'U+1F449',
//   associated_emoji: 'U+1F446',
//   association_type: 'Person',
//   difficulty_index: 2
// }
// {
//   emoji: 'U+1F346',
//   associated_emoji: 'U+1F347',
//   association_type: 'Food',
//   difficulty_index: 2
// }
// {
//   emoji: 'U+1F33F',
//   associated_emoji: 'U+1F33E',
//   association_type: 'Nature',
//   difficulty_index: 1
// }
// {
//   emoji: 'U+1F389',
//   associated_emoji: 'U+1F388',
//   association_type: 'Celebration',
//   difficulty_index: 1
// }
// {
//   emoji: 'U+1F4B0',
//   associated_emoji: 'U+1F4B3',
//   association_type: 'Communication',
//   difficulty_index: 1
// }

const fs = require('fs')

function separateEmojios() {
  const difficulty1 = []
  const difficulty2 = []
  const difficulty3 = []
  const difficulty4 = []
  const difficulty5 = []
  pairs.forEach((pair) => {
    switch (pair.difficulty_index) {
      case 1:
        difficulty1.push(pair)
        break
      case 2:
        difficulty2.push(pair)
        break
      case 3:
        difficulty3.push(pair)
        break
      case 4:
        difficulty4.push(pair)
        break
      case 5:
        difficulty5.push(pair)
        break
      default:
        break
    }
  })
  const output = ` const difficulty1 = ${JSON.stringify(
    difficulty1,
    null,
    2
  ).replace(/"([^"]+)":/g, '$1:')}; const difficulty2 = ${JSON.stringify(
    difficulty2,
    null,
    2
  ).replace(/"([^"]+)":/g, '$1:')}; const difficulty3 = ${JSON.stringify(
    difficulty3,
    null,
    2
  ).replace(/"([^"]+)":/g, '$1:')}; const difficulty4 = ${JSON.stringify(
    difficulty4,
    null,
    2
  ).replace(/"([^"]+)":/g, '$1:')}; const difficulty5 = ${JSON.stringify(
    difficulty5,
    null,
    2
  ).replace(
    /"([^"]+)":/g,
    '$1:'
  )}; module.exports = { difficulty1, difficulty2, difficulty3, difficulty4, difficulty5 }; `
  fs.writeFile('separatedArrays.js', output, (err) => {
    if (err) {
      console.error('Error writing to file:', err)
    } else {
      console.log('File saved as separatedArrays.js')
    }
  })
}
separateEmojios()
