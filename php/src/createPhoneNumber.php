<?php
function createPhoneNumber($numbersArray) {
    return vsprintf("(%d%d%d) %d%d%d-%d%d%d%d", $numbersArray);
}
