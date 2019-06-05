/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaUploadErrorCode } from './KalturaUploadErrorCode';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaUploadResponseArgs() { }
/** @type {?|undefined} */
KalturaUploadResponseArgs.prototype.uploadTokenId;
/** @type {?|undefined} */
KalturaUploadResponseArgs.prototype.fileSize;
/** @type {?|undefined} */
KalturaUploadResponseArgs.prototype.errorCode;
/** @type {?|undefined} */
KalturaUploadResponseArgs.prototype.errorDescription;
export class KalturaUploadResponse extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaUploadResponse' },
            uploadTokenId: { type: 's' },
            fileSize: { type: 'n' },
            errorCode: { type: 'en', subTypeConstructor: KalturaUploadErrorCode, subType: 'KalturaUploadErrorCode' },
            errorDescription: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaUploadResponse.prototype.uploadTokenId;
    /** @type {?} */
    KalturaUploadResponse.prototype.fileSize;
    /** @type {?} */
    KalturaUploadResponse.prototype.errorCode;
    /** @type {?} */
    KalturaUploadResponse.prototype.errorDescription;
}
typesMappingStorage['KalturaUploadResponse'] = KalturaUploadResponse;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVwbG9hZFJlc3BvbnNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhVXBsb2FkUmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFVbEYsTUFBTSw0QkFBNkIsU0FBUSxpQkFBaUI7Ozs7SUFPeEQsWUFBWSxJQUFpQztRQUV6QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDMUUsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzVHLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN4QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsdUJBQXVCLENBQUMsR0FBRyxxQkFBcUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhVXBsb2FkRXJyb3JDb2RlIH0gZnJvbSAnLi9LYWx0dXJhVXBsb2FkRXJyb3JDb2RlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhVXBsb2FkUmVzcG9uc2VBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgdXBsb2FkVG9rZW5JZD8gOiBzdHJpbmc7XG5cdGZpbGVTaXplPyA6IG51bWJlcjtcblx0ZXJyb3JDb2RlPyA6IEthbHR1cmFVcGxvYWRFcnJvckNvZGU7XG5cdGVycm9yRGVzY3JpcHRpb24/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhVXBsb2FkUmVzcG9uc2UgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICB1cGxvYWRUb2tlbklkIDogc3RyaW5nO1xuXHRmaWxlU2l6ZSA6IG51bWJlcjtcblx0ZXJyb3JDb2RlIDogS2FsdHVyYVVwbG9hZEVycm9yQ29kZTtcblx0ZXJyb3JEZXNjcmlwdGlvbiA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVVwbG9hZFJlc3BvbnNlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFVcGxvYWRSZXNwb25zZScgfSxcblx0XHRcdFx0dXBsb2FkVG9rZW5JZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmaWxlU2l6ZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRlcnJvckNvZGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhVXBsb2FkRXJyb3JDb2RlLCBzdWJUeXBlIDogJ0thbHR1cmFVcGxvYWRFcnJvckNvZGUnIH0sXG5cdFx0XHRcdGVycm9yRGVzY3JpcHRpb24gOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVVwbG9hZFJlc3BvbnNlJ10gPSBLYWx0dXJhVXBsb2FkUmVzcG9uc2U7Il19