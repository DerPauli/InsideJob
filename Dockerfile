FROM nodejs:latest
ADD . /opt/app
RUN cd /opt/app && npm install
CMD [ "npm", "run start" ]
