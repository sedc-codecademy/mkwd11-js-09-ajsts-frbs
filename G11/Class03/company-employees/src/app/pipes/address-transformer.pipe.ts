import { Pipe, PipeTransform } from '@angular/core'
import { Address } from '../interfaces/address.interface';

@Pipe({
    name: 'addressTransform'
})

export class AddressTransform implements PipeTransform {
    transform(value: Address): string {
        return `${value.street}, ${value.city}. ${value.zipCode}`;
    }
}