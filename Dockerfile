FROM quay.io/keycloak/keycloak:21.1.1

ENV KC_SPI_THEME_WELCOME_THEME=awesome-theme
ENV KEYCLOAK_ADMIN=admin
ENV KEYCLOAK_ADMIN_PASSWORD=admin

ADD . /opt/keycloak/themes
