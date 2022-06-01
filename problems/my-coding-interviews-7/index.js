const IP2Int = (ip) => {
  const reg = /^\d{0,3}\.\d{0,3}\.\d{0,3}\.\d{0,3}$/;
  if (!reg.test(ip)) {
    throw new Error('Error: arguments must be a ip address!');
  }
  const nums = ip.split('.').map((n) => Number(n));
  if (nums.some((n) => n > 255 || n < 0)) {
    throw new Error('Error: arguments must be a ip address!');
  }
  let int = 0;
  for (let i = 0; i < 4; i++) {
    int += nums[i];
    if (i !== 3) {
      int = int << 8;
    }
  }
  return int;
};
