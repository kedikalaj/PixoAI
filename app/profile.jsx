import { Text, View, Image, Button } from "react-native";
import React from "react";

const Profile = () => {
  return (
    <View className="flex-1 items-center justify-center bg-gray-100 p-4">
      {/* Profile Image */}

      {/* Profile Name */}
      <Text className="text-2xl font-bold text-blue-700 mb-2">John Doe</Text>

      {/* Profile Bio */}
      <Text className="text-center text-gray-700 px-6 mb-4">
        Software Developer passionate about building mobile and web
        applications.
      </Text>

      {/* Statistics Section */}
      <View className="flex-row space-x-6 mb-6">
        <View className="items-center">
          <Text className="text-xl font-semibold text-gray-900">120</Text>
          <Text className="text-gray-600">Posts</Text>
        </View>
        <View className="items-center">
          <Text className="text-xl font-semibold text-gray-900">350</Text>
          <Text className="text-gray-600">Followers</Text>
        </View>
        <View className="items-center">
          <Text className="text-xl font-semibold text-gray-900">180</Text>
          <Text className="text-gray-600">Following</Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View className="flex-row space-x-4">
        <Button
          title="Edit Profile"
          color="#4F46E5"
          onPress={() => alert("Edit Profile pressed")}
        />
        <Button
          title="Settings"
          color="#4F46E5"
          onPress={() => alert("Settings pressed")}
        />
      </View>
    </View>
  );
};

export default Profile;
