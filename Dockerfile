FROM ubuntu:latest as ubuntu

RUN apt-get update \
    && apt-get -y install curl gnupg python3-pip python3-venv nodejs

EXPOSE 3000
EXPOSE 8000
EXPOSE 5432

FROM ubuntu as node

RUN curl -sL https://deb.nodesource.com/setup_18.x  | bash -

FROM ubuntu AS backend

COPY application.ini /application.ini
COPY services/backend /services/backend
WORKDIR /services/backend
RUN python3 -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"
RUN apt-get install -y libpq-dev
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
CMD ["python", "app.py"]

FROM backend AS frontend

COPY services/frontend /services/frontend
WORKDIR /services/frontend
RUN npm install
RUN npm run build

WORKDIR /