function booWho(bool) {
  return typeof bool === 'boolean' ? true : !(typeof bool);
}

booWho(null);