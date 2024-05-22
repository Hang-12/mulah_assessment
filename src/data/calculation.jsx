import { datas } from '@@/data/data';

const findValue = (index) => {
  return datas.find((item) => item.index === index).value;
}

const alpha = findValue('A5') + findValue('A20');
const beta = findValue('A15') / findValue('A7');
const charlie = findValue('A13') * findValue('A12'); 

export const category = [
  { label: `Alpha`, total: alpha },
  { label: `Beta`, total: beta },
  { label: `Charlie`, total: charlie },
];