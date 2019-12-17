import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../hoc/withFirebase';
export function useAuth() {
    return useContext(FirebaseContext)
}