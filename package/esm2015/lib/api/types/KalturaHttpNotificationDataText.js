/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaHttpNotificationData } from './KalturaHttpNotificationData';
/**
 * @record
 */
export function KalturaHttpNotificationDataTextArgs() { }
/** @type {?|undefined} */
KalturaHttpNotificationDataTextArgs.prototype.content;
export class KalturaHttpNotificationDataText extends KalturaHttpNotificationData {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaHttpNotificationDataText' },
            content: { type: 'o', subTypeConstructor: KalturaStringValue, subType: 'KalturaStringValue' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaHttpNotificationDataText.prototype.content;
}
typesMappingStorage['KalturaHttpNotificationDataText'] = KalturaHttpNotificationDataText;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUh0dHBOb3RpZmljYXRpb25EYXRhVGV4dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUh0dHBOb3RpZmljYXRpb25EYXRhVGV4dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFELE9BQU8sRUFBRSwyQkFBMkIsRUFBbUMsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7OztBQU83RyxNQUFNLHNDQUF1QyxTQUFRLDJCQUEyQjs7OztJQUk1RSxZQUFZLElBQTJDO1FBRW5ELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxpQ0FBaUMsRUFBRTtZQUNwRixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGtCQUFrQixFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtTQUN4RixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7O0FBRUQsbUJBQW1CLENBQUMsaUNBQWlDLENBQUMsR0FBRywrQkFBK0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU3RyaW5nVmFsdWUgfSBmcm9tICcuL0thbHR1cmFTdHJpbmdWYWx1ZSc7XG5pbXBvcnQgeyBLYWx0dXJhSHR0cE5vdGlmaWNhdGlvbkRhdGEsIEthbHR1cmFIdHRwTm90aWZpY2F0aW9uRGF0YUFyZ3MgfSBmcm9tICcuL0thbHR1cmFIdHRwTm90aWZpY2F0aW9uRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUh0dHBOb3RpZmljYXRpb25EYXRhVGV4dEFyZ3MgIGV4dGVuZHMgS2FsdHVyYUh0dHBOb3RpZmljYXRpb25EYXRhQXJncyB7XG4gICAgY29udGVudD8gOiBLYWx0dXJhU3RyaW5nVmFsdWU7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFIdHRwTm90aWZpY2F0aW9uRGF0YVRleHQgZXh0ZW5kcyBLYWx0dXJhSHR0cE5vdGlmaWNhdGlvbkRhdGEge1xuXG4gICAgY29udGVudCA6IEthbHR1cmFTdHJpbmdWYWx1ZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUh0dHBOb3RpZmljYXRpb25EYXRhVGV4dEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhSHR0cE5vdGlmaWNhdGlvbkRhdGFUZXh0JyB9LFxuXHRcdFx0XHRjb250ZW50IDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU3RyaW5nVmFsdWUsIHN1YlR5cGUgOiAnS2FsdHVyYVN0cmluZ1ZhbHVlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhSHR0cE5vdGlmaWNhdGlvbkRhdGFUZXh0J10gPSBLYWx0dXJhSHR0cE5vdGlmaWNhdGlvbkRhdGFUZXh0OyJdfQ==