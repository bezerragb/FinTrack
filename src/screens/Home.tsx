import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useEffect } from 'react';
import { styles } from '../styles/homeStyles';
import { useFinanceStore } from '../store/useFinanceStore';

export default function Home() {

  const getBalance = useFinanceStore((state) => state.getBalance);
  const getIncome = useFinanceStore((state) => state.getIncome);
  const getExpense = useFinanceStore((state) => state.getExpense);
  const loadEntries = useFinanceStore((state) => state.loadEntries);
  const entries = useFinanceStore((state) => state.entries);

  useEffect(() => {
  loadEntries();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>
        Controle Financeiro
      </Text>

      <View style={styles.toggleContainer}>

        <TouchableOpacity style={styles.activeToggle}>
          <Text style={styles.activeToggleText}>
            Mensal
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.toggleButton}>
          <Text style={styles.toggleText}>
            Anual
          </Text>
        </TouchableOpacity>

      </View>

      <View style={styles.monthContainer}>

        <TouchableOpacity style={styles.arrowButton}>
          <Text>←</Text>
        </TouchableOpacity>

        <Text style={styles.monthText}>
          Maio de 2026
        </Text>

        <TouchableOpacity style={styles.arrowButton}>
          <Text>→</Text>
        </TouchableOpacity>

      </View>

      {/* CARD SALDO */}
      <View style={styles.balanceCard}>

        <Text style={styles.balanceTitle}>
          Saldo
        </Text>

        <Text style={styles.balanceValue}>
          R$ {getBalance().toFixed(2)}
        </Text>

      </View>

      <View style={styles.resumeContainer}>

        <View style={styles.resumeCard}>
          <Text style={styles.incomeText}>
            Ganhos
          </Text>

          <Text style={styles.incomeValue}>
            R$ {getIncome().toFixed(2)}
          </Text>
        </View>

        <View style={styles.resumeCard}>
          <Text style={styles.expenseText}>
            Gastos
          </Text>

          <Text style={styles.expenseValue}>
            R$ {getExpense().toFixed(2)}
          </Text>
        </View>

      </View>

      <Text style={styles.sectionTitle}>
        Últimas movimentações
        
      </Text>
      
      {entries.map((item) => (

  <View
    key={item.id}
    style={styles.transactionCard}
  >

    <View>
      <Text style={styles.transactionTitle}>
        {item.title}
      </Text>

      <Text style={styles.transactionCategory}>
        {item.category}
      </Text>
    </View>

    <Text
      style={
        item.type === 'income'
          ? styles.incomeTransaction
          : styles.expenseTransaction
      }
    >
      {item.type === 'income' ? '+' : '-'}
      R$ {item.amount}
    </Text>

  </View>

))}

    </ScrollView>
    
  );
}