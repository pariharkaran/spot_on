import React from 'react'
import {FlatList, View} from 'react-native'

import {Button, LeaveCard, SafeAreaWrapper, TextBox} from '../../components'
import {styles} from './leaves.styles'
import {BackArrowRound, Filter} from '../../assets/svg'
import {responsiveHeight, responsiveWidth} from '../../utils/scaling'
import {Colors} from '../../theme/colors'

export const LeavesHistory: React.FC = ({navigation}) => {
    return (
        <SafeAreaWrapper>
            <View style={styles.container}>
                <View
                    style={[
                        styles.historyToolbar,
                        {justifyContent: 'space-between'}
                    ]}
                >
                    <View style={styles.historyToolbar}>
                        <Button
                            icon={<BackArrowRound />}
                            backgroundColor="white"
                            containerStyles={{paddingHorizontal: 0}}
                            onPress={() => {
                                navigation.goBack()
                            }}
                        />
                        <View style={{marginHorizontal: responsiveWidth(1)}} />
                        <TextBox size={16} fontWeight={'500'}>
                            Leave History
                        </TextBox>
                    </View>
                    <Button
                        title="Filter"
                        titleSize={11}
                        titleColor={Colors.black}
                        height={3.9}
                        borderColor={Colors.black}
                        borderRadius={1}
                        titleWeight={'500'}
                        backgroundColor={Colors.cultured}
                        icon={<Filter />}
                        badge={2}
                    />
                </View>

                <FlatList
                    data={new Array(10).fill(0)}
                    renderItem={({item, index}) => <LeaveCard />}
                    contentContainerStyle={styles.leaveHistoryListContainer}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaWrapper>
    )
}
