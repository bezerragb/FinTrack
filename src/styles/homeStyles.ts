import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  container: {
  flexGrow: 1,
  backgroundColor: '#F1F5F9',
  paddingHorizontal: 20,
  paddingTop: 60,
  width: '100%',
  maxWidth: 500,
  alignSelf: 'center',
},

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 30,
  },

  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#E5E7EB',
    borderRadius: 16,
    padding: 4,
    marginBottom: 30,
  },

  activeToggle: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: 'center',
  },

  toggleButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },

  activeToggleText: {
    fontWeight: 'bold',
    color: '#000',
  },

  toggleText: {
    color: '#000',
  },

  monthContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },

  arrowButton: {
    width: 50,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    elevation: 3,
  },

  monthText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0F172A',
  },

  balanceCard: {
    backgroundColor: '#00D95F',
    borderRadius: 24,
    padding: 25,
    marginBottom: 25,
  },

  balanceTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    marginBottom: 20,
    fontWeight: '600',
  },

  balanceValue: {
    color: '#FFFFFF',
    fontSize: 42,
    fontWeight: 'bold',
  },

  resumeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  resumeCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
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

  incomeText: {
    color: '#00B347',
    fontWeight: 'bold',
    marginBottom: 25,
    fontSize: 18,
  },

  incomeValue: {
    color: '#00B347',
    fontSize: 32,
    fontWeight: 'bold',
  },

  expenseText: {
    color: '#FF3B30',
    fontWeight: 'bold',
    marginBottom: 25,
    fontSize: 18,
  },

  expenseValue: {
    color: '#FF3B30',
    fontSize: 32,
    fontWeight: 'bold',
  },

  sectionTitle: {
  fontSize: 22,
  fontWeight: 'bold',
  color: '#0F172A',
  marginTop: 35,
  marginBottom: 20,
},

transactionCard: {
  backgroundColor: '#FFFFFF',
  borderRadius: 18,
  padding: 18,
  marginBottom: 14,

  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.08,
  shadowRadius: 4,

  elevation: 3,
},

transactionTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#111827',
  marginBottom: 5,
},

transactionCategory: {
  fontSize: 14,
  color: '#6B7280',
},

incomeTransaction: {
  color: '#00B347',
  fontSize: 20,
  fontWeight: 'bold',
},

expenseTransaction: {
  color: '#FF3B30',
  fontSize: 20,
  fontWeight: 'bold',
},

});