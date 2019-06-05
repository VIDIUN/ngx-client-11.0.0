/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaPushEventNotificationParameter } from './KalturaPushEventNotificationParameter';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaPushNotificationParamsArgs() { }
/** @type {?|undefined} */
KalturaPushNotificationParamsArgs.prototype.userParams;
export class KalturaPushNotificationParams extends KalturaObjectBase {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.userParams === 'undefined')
            this.userParams = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaPushNotificationParams' },
            userParams: { type: 'a', subTypeConstructor: KalturaPushEventNotificationParameter, subType: 'KalturaPushEventNotificationParameter' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaPushNotificationParams.prototype.userParams;
}
typesMappingStorage['KalturaPushNotificationParams'] = KalturaPushNotificationParams;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVB1c2hOb3RpZmljYXRpb25QYXJhbXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFQdXNoTm90aWZpY2F0aW9uUGFyYW1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEcsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7O0FBT2xGLE1BQU0sb0NBQXFDLFNBQVEsaUJBQWlCOzs7O0lBSWhFLFlBQVksSUFBeUM7UUFFakQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1osRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0tBQ3BFOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtZQUNsRixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHFDQUFxQyxFQUFFLE9BQU8sRUFBRyx1Q0FBdUMsRUFBRTtTQUNqSSxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7O0FBRUQsbUJBQW1CLENBQUMsK0JBQStCLENBQUMsR0FBRyw2QkFBNkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhUHVzaEV2ZW50Tm90aWZpY2F0aW9uUGFyYW1ldGVyIH0gZnJvbSAnLi9LYWx0dXJhUHVzaEV2ZW50Tm90aWZpY2F0aW9uUGFyYW1ldGVyJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhUHVzaE5vdGlmaWNhdGlvblBhcmFtc0FyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICB1c2VyUGFyYW1zPyA6IEthbHR1cmFQdXNoRXZlbnROb3RpZmljYXRpb25QYXJhbWV0ZXJbXTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVB1c2hOb3RpZmljYXRpb25QYXJhbXMgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICB1c2VyUGFyYW1zIDogS2FsdHVyYVB1c2hFdmVudE5vdGlmaWNhdGlvblBhcmFtZXRlcltdO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhUHVzaE5vdGlmaWNhdGlvblBhcmFtc0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnVzZXJQYXJhbXMgPT09ICd1bmRlZmluZWQnKSB0aGlzLnVzZXJQYXJhbXMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUHVzaE5vdGlmaWNhdGlvblBhcmFtcycgfSxcblx0XHRcdFx0dXNlclBhcmFtcyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVB1c2hFdmVudE5vdGlmaWNhdGlvblBhcmFtZXRlciwgc3ViVHlwZSA6ICdLYWx0dXJhUHVzaEV2ZW50Tm90aWZpY2F0aW9uUGFyYW1ldGVyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhUHVzaE5vdGlmaWNhdGlvblBhcmFtcyddID0gS2FsdHVyYVB1c2hOb3RpZmljYXRpb25QYXJhbXM7Il19