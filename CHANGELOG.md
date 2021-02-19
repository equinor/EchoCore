# Changelog

All notable changes to this project will be documented in this file.

The changelog is valid starting with EchoCore v0.1.1.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/#how),
this project does not follow semantic versioning. Version numbers are bumped based on a subjective feeling of "change impact".

## [Unreleased] Echo Settings v0.1.13

This new release of Echo core consist of the global setting. And functionality to
maintain and retrieve settings.

### Add

Exposes new main Class EchoSettings.

-   Onboarding - for the onboarding process.
-   Global Settings Actions - for updating all settings.
-   Plant specific actions to get and set Plant date
-   PersistEchoSetting - Helper class for persisting the settings to local storage.
-   Module Settings - Class for handling and storing light module settings

Unit test are added for all new features.

### Change

Some minor name changes and minor refactor of old code

### Fix

-   None