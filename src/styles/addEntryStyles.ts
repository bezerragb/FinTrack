import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#EEF1F6',
    padding: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 25,
    marginTop: 10,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,

    padding: 20,

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.08,
    shadowRadius: 4,

    elevation: 3,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 20,
  },

  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 10,
    marginTop: 15,
  },

  switchContainer: {
    flexDirection: 'row',
    backgroundColor: '#F1F1F5',
    borderRadius: 14,
    overflow: 'hidden',
  },

  switchButton: {
    flex: 1,
    paddingVertical: 14,
    alignItems: 'center',
  },

  switchButtonActive: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    margin: 4,
  },

  switchText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
  },

  input: {
    backgroundColor: '#F3F4F6',

    borderRadius: 12,

    paddingHorizontal: 15,
    paddingVertical: 15,

    fontSize: 16,

    color: '#111827',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginTop: 30,
  },

  cancelButton: {
    flex: 1,

    backgroundColor: '#FFFFFF',

    borderWidth: 1,
    borderColor: '#D1D5DB',

    borderRadius: 12,

    paddingVertical: 15,

    alignItems: 'center',

    marginRight: 10,
  },

  addButton: {
    flex: 1,

    backgroundColor: '#FF0000',

    borderRadius: 12,

    paddingVertical: 15,

    alignItems: 'center',

    marginLeft: 10,
  },

  cancelButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },

  addButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  pickerContainer: {

  backgroundColor: '#F3F4F6',

  borderRadius: 12,

  overflow: 'hidden',

},

});