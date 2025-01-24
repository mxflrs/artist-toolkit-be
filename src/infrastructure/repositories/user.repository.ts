import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/user.entity';
import { supabase } from 'src/infrastructure/database/supabase-client';
import { UserDto } from 'src/presentation/dtos/user.dto';

@Injectable()
export class UserRepository {
  async save(user: UserDto): Promise<User | null> {
    const { data, error } = await supabase.from('users').insert(user).select();

    if (error) throw new Error(`Failed save user ${error}`);
    return data[0];
  }

  async update(user: UserDto): Promise<User | null> {
    const { data, error } = await supabase
      .from('users')
      .update({
        ...user,
        updated_at: new Date().toISOString(),
      })
      .eq('id', user.id)
      .single();

    if (error) throw new Error(`Failed update user ${error}`);
    return (data as User) || null;
  }

  async delete(userId: string) {
    const { error } = await supabase.from('users').delete().eq('id', userId);
    if (error) throw new Error(`Failed save user ${error}`);
    return userId;
  }

  async getAllUsers(): Promise<User[] | null> {
    const { data, error } = await supabase.from('users').select('*');

    if (error) {
      console.log(error);
      return null;
    }
    return data || null;
  }

  async findByName(name: string): Promise<User | null> {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('name', name)
      .single();
    return error ? null : data;
  }
}
