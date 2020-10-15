import * as firebase from 'firebase';
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: 'AIzaSyCGrhfG0-1z6Ctvho6wwaB-jMFTQNRiXHc',
    authDomain: 'robo-rabbit.firebaseapp.com',
    databaseURL: 'https://robo-rabbit.firebaseio.com',
    projectId: 'robo-rabbit',
    storageBucket: 'robo-rabbit.appspot.com',
    messagingSenderId: '244751670546',
    appId: '1:244751670546:web:8502d08c99a315112727cb',
    measurementId: 'G-XWZ6J0KSZB'
}

firebase.initializeApp(firebaseConfig)

const firestore = firebase.firestore() 


export const addWorkout = async (categoryId) => {
    const doc_ref = await firestore.collection('categories').doc(categoryId).collection('workouts').add({
        categoryId,
        title: '',
        description: '',
        date: ''
    })
    return doc_ref.id   
}

export const deleteWorkouts = (categoryId) => {
    const workouts_query = firestore.collection('categories').doc(categoryId).collection('workouts').where('title','==', '');
        workouts_query.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            doc.ref.delete();
        });
        });
}

export const addCatId = (catId, id) => {
    firestore.collection('categories').doc(catId).collection('workouts').doc(id).set({
        categoryId: catId
    }, { merge: true })
    .then(function(docRef) {
        console.log('Document written: ', docRef);
    })
    .catch(function(error) {
        console.error('Error adding document: ', error);
    });
}

export const addWorkoutSets = (catId, id) => {
    firestore.collection('categories').doc(catId).collection('workouts').doc(id).set({
        categoryId: catId,
        title: '50 minutes',
        description: '50 minutes in the park. Running is the way in which people or animals travel quickly on their feet.',
        date: '7.2.2020',
        sets: {
            1: {
                reps: 5,
                meters: 200,
                pace: 35
            },
            2: {
                reps: 3,
                meters: 400,
                pace: 75
            }
        }   
    }
    // , { merge: true }
    )
    .then(function(docRef) {
        console.log('Document written: ', docRef);
    })
    .catch(function(error) {
        console.error('Error adding document: ', error);
    });
}

export const setWorkoutDate = (catId, id) => {
    firestore.collection('categories').doc(catId).collection('workouts').doc(id).set({
        date: new Date().toISOString().split('T')[0]    
    }, { merge: true })
    .then(function(docRef) {
        console.log('Document written: ', docRef);
    })
    .catch(function(error) {
        console.error('Error adding document: ', error);
    });
}

export const updateWorkout = (workout) => {
    const { categoryId, id, title, description, date, sets } = workout
   
    firestore.collection('categories').doc(categoryId).collection('workouts').doc(id).set({
        title, description, date, sets
    }, { merge: true })
    .then(function(docRef) {
        console.log('Document written: ', docRef);
    })
    .catch(function(error) {
        console.error('Error adding document: ', error);
    });
}

export const getCategory = () => {  
    firestore.collection('categories').where('name', '==', 'Easy Run')
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, ' => ', doc.data());
                console.log('doc.id: ', doc.id);    
            });
        })
        .catch(function(error) {
            console.log('Error getting documents: ', error);
        });
}

export const getCategories = () => {
    const categories = []
    
    firestore.collection('categories').get().then((querySnapshot) => {
        querySnapshot.forEach(function(cat) {
            //const category = { id: cat.id, ...cat.data() };
            const category = { id: cat.id, name: cat.data().name };
            categories.push(category);
        });
    })
    return categories
}

export const getWorkouts = () => {
    let workouts = []

    firestore.collection('categories').get().then((querySnapshot) => {
        querySnapshot.forEach(function(cat) {
            firestore.collection(`/categories/${cat.id}/workouts`)
            .get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    const { categoryId, title, description, date, sets } = doc.data()

                    const workout = {
                        id: doc.id,
                        categoryId,
                        title,
                        description,
                        date,
                        sets
                    }
                    workouts.push(workout)
                    //addWorkoutSets(cat.id, doc.id)
                });
            })   
        });
    })
    return workouts
}

export const getCategoryWorkouts = (catId) => {
    let workouts = []
      
    firestore.collection(`/categories/${catId}/workouts`)
    .get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            const { categoryId, title, description, date } = doc.data()

            const workout = {
                id: doc.id,
                categoryId,
                title,
                description,
                date
            }
            workouts.push(workout)
            firebase.setWorkoutDate(catId, doc.id);
            //console.log('!!workouts: ', workouts);
            //console.log('doc.id: ', doc.id);
        });
    })
    return workouts
}

export default firebase

