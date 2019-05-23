```
bookingURL
price {
  amount
  currency
}
departure {
  stop {
    city {
      name
    }
  }
}
arrival {
  stop {
    city {
      name
    }
  }
}
sectors {
  duration
  departure {
    stop {
      id
      city {
        name
      }
    }
    time {
      local
      utc
    }
  }
  arrival {
    time {
      utc
    }
  }
  segments {
    carrier {
      code
    }
  }
}
```