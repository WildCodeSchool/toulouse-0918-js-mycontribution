UNIXUSERNAME=dummyser
UNIXUSERCLEARPASS=DummyPass7
UNIXUSERPASS=$(openssl passwd -crypt $UNIXUSERCLEARPASS)

MYSQLUSERNAME=dummydb
MYSQLROOTPASS=AnotherDummyPass1
MYSQLUSERPASS=AnotherPass
MYSQLDATABASE=mysuperapp_prod
JWTSECRET=SomeJwtSecret

ssh root@TSAS350X << HERE
  echo $UNIXUSERNAME
  echo $UNIXUSERCLEARPASS
  # pouet
  echo $UNIXUSERPASS
  useradd -m -p '$UNIXUSERPASS' -s /bin/bash $UNIXUSERNAME
  tee nonprivileged.sh <<EOF
#!/bin/bash
echo '{"secretKey":"$JWTSECRET","db":{"host":"localhost","user":"$MYSQLUSERNAME","password":"$MYSQLUSERPASS","database":"$MYSQLDATABASE"}}' > pouet.json
EOF
  chown $UNIXUSERNAME:$UNIXUSERNAME nonprivileged.sh
  chmod +x nonprivileged.sh
  mv nonprivileged.sh /home/$UNIXUSERNAME
  sudo -H -u $UNIXUSERNAME bash -c 'cd /home/$UNIXUSERNAME && ./nonprivileged.sh'
  sudo -H -u $UNIXUSERNAME bash -c 'echo "I am returning to $USER, with uid $UID"'
HERE